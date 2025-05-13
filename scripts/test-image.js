const sharp = require('sharp');

async function testImage() {
  try {
    // 測試讀取第一張圖片
    const metadata = await sharp('public/images/hero1.jpg').metadata();
    console.log('Original image metadata:', metadata);

    // 測試處理圖片
    await sharp('public/images/hero1.jpg')
      .resize(300, 200)
      .toFile('public/images/test.jpg');
    console.log('Successfully created test image');
  } catch (error) {
    console.error('Error in test:', error);
  }
}

testImage();
