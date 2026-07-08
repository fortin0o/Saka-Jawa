import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';
import sharp from 'sharp';
import { optimize } from 'svgo';

const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets');

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const buffer = await fs.readFile(filePath);
  let originalSize = buffer.length;
  let newBuffer = buffer;

  try {
    if (ext === '.svg') {
      const result = optimize(buffer.toString('utf-8'), {
        path: filePath,
        multipass: true,
      });
      newBuffer = Buffer.from(result.data);
    } else if (['.png', '.jpg', '.jpeg', '.webp', '.avif'].includes(ext)) {
      const image = sharp(buffer);
      
      if (ext === '.png') {
        newBuffer = await image.png({ quality: 80, compressionLevel: 9 }).toBuffer();
      } else if (ext === '.jpg' || ext === '.jpeg') {
        newBuffer = await image.jpeg({ quality: 80, progressive: true }).toBuffer();
      } else if (ext === '.webp') {
        newBuffer = await image.webp({ quality: 80 }).toBuffer();
      } else if (ext === '.avif') {
        newBuffer = await image.avif({ quality: 80 }).toBuffer();
      }
    } else {
      return;
    }

    if (newBuffer.length < originalSize) {
      await fs.writeFile(filePath, newBuffer);
      console.log(`✅ Compressed: ${filePath.replace(ASSETS_DIR, '')} (${(originalSize / 1024).toFixed(2)} KB -> ${(newBuffer.length / 1024).toFixed(2)} KB)`);
    } else {
      console.log(`⏩ Skipped (already optimized): ${filePath.replace(ASSETS_DIR, '')}`);
    }
  } catch (err) {
    console.error(`❌ Error compressing ${filePath.replace(ASSETS_DIR, '')}:`, err.message);
  }
}

async function run() {
  console.log(`Scanning assets in ${ASSETS_DIR}...`);
  const files = await glob('**/*.{png,jpg,jpeg,webp,avif,svg}', {
    cwd: ASSETS_DIR,
    absolute: true,
  });

  console.log(`Found ${files.length} images. Compressing...`);
  
  const promises = files.map(file => processImage(file));
  await Promise.all(promises);

  console.log('🎉 Compression complete!');
}

run();
