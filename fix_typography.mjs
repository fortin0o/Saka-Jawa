import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

async function processFile(filePath) {
  let content = await fs.readFile(filePath, 'utf-8');
  const original = content;

  // 1. Remove hardcoded fonts
  content = content.replace(/font-\['League_Spartan'\]/g, '');
  content = content.replace(/font-\["League_Spartan"\]/g, '');
  
  // Clean up any double spaces in classNames caused by removal
  content = content.replace(/className="([^"]+)"/g, (match, classStr) => {
    const cleaned = classStr.replace(/\s+/g, ' ').trim();
    return `className="${cleaned}"`;
  });

  // 2. Fix H2 and H3 to use font-semibold instead of font-bold
  // Also enforce leading-tight
  content = content.replace(/<(h2|h3)([^>]*)className="([^"]+)"([^>]*)>/g, (match, tag, before, classStr, after) => {
    let newClass = classStr;
    // Replace font-bold with font-semibold
    newClass = newClass.replace(/\bfont-bold\b/g, 'font-semibold');
    
    // Add font-semibold if no font weight is present
    if (!/\bfont-(bold|semibold|medium|normal|light|extrabold|black)\b/.test(newClass)) {
      newClass += ' font-semibold';
    }
    
    // Ensure leading-tight is present if not
    if (!/\bleading-(tight|snug|relaxed|normal|none|loose)\b/.test(newClass)) {
      newClass += ' leading-tight';
    }

    return `<${tag}${before}className="${newClass.trim()}"${after}>`;
  });

  // 3. Fix H1 to use font-bold
  content = content.replace(/<h1([^>]*)className="([^"]+)"([^>]*)>/g, (match, before, classStr, after) => {
    let newClass = classStr;
    newClass = newClass.replace(/\bfont-(semibold|medium|normal)\b/g, 'font-bold');
    
    if (!/\bfont-(bold|semibold|medium|normal|light|extrabold|black)\b/.test(newClass)) {
      newClass += ' font-bold';
    }
    
    if (!/\bleading-(tight|snug|relaxed|normal|none|loose)\b/.test(newClass)) {
      newClass += ' leading-tight';
    }

    return `<h1${before}className="${newClass.trim()}"${after}>`;
  });

  // 4. Fix P to use font-normal and leading-relaxed
  content = content.replace(/<p([^>]*)className="([^"]+)"([^>]*)>/g, (match, before, classStr, after) => {
    let newClass = classStr;
    
    if (!/\bfont-(bold|semibold|medium|normal|light|extrabold|black)\b/.test(newClass)) {
      newClass += ' font-normal';
    }
    
    if (!/\bleading-(tight|snug|relaxed|normal|none|loose)\b/.test(newClass)) {
      newClass += ' leading-relaxed';
    }

    return `<p${before}className="${newClass.trim()}"${after}>`;
  });

  if (original !== content) {
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`Updated: ${filePath}`);
  }
}

async function run() {
  const cwd = process.cwd();
  console.log(`Scanning tsx files in ${cwd}...`);
  
  const files = await glob('{app,components}/**/*.tsx', {
    cwd,
    absolute: true,
  });

  console.log(`Found ${files.length} tsx files. Processing...`);
  
  for (const file of files) {
    try {
      await processFile(file);
    } catch (e) {
      console.error(`Error processing ${file}: ${e.message}`);
    }
  }

  console.log('Done!');
}

run();
