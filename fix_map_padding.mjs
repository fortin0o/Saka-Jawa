import fs from 'fs/promises';

const files = [
  'd:/Lomba/Saka-Jawa/components/batik/BatikInteractiveMapSection.tsx',
  'd:/Lomba/Saka-Jawa/components/gamelan/GamelanInteractiveMapSection.tsx',
  'd:/Lomba/Saka-Jawa/components/kuliner/KulinerInteractiveMapSection.tsx',
  'd:/Lomba/Saka-Jawa/components/wayang/WayangInteractiveMapSection.tsx',
  'd:/Lomba/Saka-Jawa/components/landing/LandingExploreSection.tsx'
];

async function run() {
  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    const updated = content.replace(/pt-5 pb-3/g, 'pt-16 pb-12');
    if (content !== updated) {
      await fs.writeFile(file, updated, 'utf-8');
      console.log(`Updated: ${file}`);
    }
  }
}

run();
