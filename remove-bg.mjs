import { removeBackground } from '@imgly/background-removal-node';
import { writeFileSync } from 'fs';

async function processImage(inputPath, outputPath) {
  console.log(`Processing: ${inputPath}...`);
  try {
    const blob = await removeBackground(inputPath);
    const buffer = await blob.arrayBuffer();
    writeFileSync(outputPath, Buffer.from(buffer));
    console.log(`✅ Saved: ${outputPath}`);
  } catch(e) {
    console.error(`❌ Failed ${inputPath}:`, e);
  }
}

async function main() {
  await processImage('src/assets/dr-aita-hero.jpg', 'src/assets/dr-aita-hero-transparent.png');
  await processImage('src/assets/dr-aita-bio.jpg', 'src/assets/dr-aita-bio-transparent.png');
  await processImage('src/assets/dr-aita-sobre.jpg', 'src/assets/dr-aita-sobre-transparent.png');
}

main();
