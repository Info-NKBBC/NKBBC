const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = {
  desktop: { width: 1920, height: 750 },
  mobile: { width: 750, height: 500 }
};

async function processImage(inputPath, outputPath, width, height) {
  try {
    // 檢查圖片是否存在
    const stats = await fs.stat(inputPath);
    console.log(`Processing ${inputPath} (size: ${stats.size} bytes)`);

    // 使用 sharp 處理圖片
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'cover',
        position: 'centre'
      })
      .toFile(outputPath);
    
    console.log(`Successfully resized ${inputPath} to ${width}x${height}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
    return false;
  }
}

async function main() {
  const inputDir = path.join(__dirname, '../public/images');
  const outputDir = path.join(__dirname, '../public/images/resized');

  try {
    console.log(`Creating output directory: ${outputDir}`);
    await fs.mkdir(outputDir, { recursive: true });

    const files = await fs.readdir(inputDir);
    const heroImages = files.filter(file => file.startsWith('hero') && file.endsWith('.jpg'));
    console.log(`Found ${heroImages.length} hero images to process`);

    for (const file of heroImages) {
      const inputPath = path.join(inputDir, file);
      
      // 處理桌面尺寸
      const desktopPath = path.join(outputDir, `desktop-${file}`);
      const desktopSuccess = await processImage(inputPath, desktopPath, sizes.desktop.width, sizes.desktop.height);

      // 處理移動設備尺寸
      const mobilePath = path.join(outputDir, `mobile-${file}`);
      const mobileSuccess = await processImage(inputPath, mobilePath, sizes.mobile.width, sizes.mobile.height);

      if (!desktopSuccess || !mobileSuccess) {
        console.error(`Failed to process ${file} for one or both sizes`);
      }
    }
  } catch (error) {
    console.error('Error in main:', error);
  }
}

main();
