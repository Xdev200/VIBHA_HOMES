const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const svg2img = require('svg2img');

const publicDir = path.join(__dirname, '../public');

// Convert SVG to PNG
function convertSvgToPng(inputPath, outputPath, size) {
  return new Promise((resolve, reject) => {
    const svgContent = fs.readFileSync(inputPath, 'utf8');
    
    svg2img(svgContent, { width: size, height: size }, (err, buffer) => {
      if (err) {
        return reject(err);
      }
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`Created ${outputPath}`);
      resolve();
    });
  });
}

// Convert SVG to ICO
async function convertSvgToIco(inputPath, outputPath) {
  try {
    // First convert to PNG
    const tempPngPath = path.join(publicDir, 'temp-favicon.png');
    await convertSvgToPng(inputPath, tempPngPath, 32);
    
    // Then convert PNG to ICO format using sharp
    await sharp(tempPngPath)
      .resize(32, 32)
      .toFile(outputPath);
    
    // Remove temporary PNG
    fs.unlinkSync(tempPngPath);
    
    console.log(`Created ${outputPath}`);
  } catch (error) {
    console.error('Error converting to ICO:', error);
  }
}

async function main() {
  try {
    // Generate favicon.ico
    await convertSvgToIco(
      path.join(publicDir, 'vibha-logo.svg'),
      path.join(publicDir, 'favicon.ico')
    );
    
    // Generate apple-icon.png
    await convertSvgToPng(
      path.join(publicDir, 'apple-icon.svg'),
      path.join(publicDir, 'apple-icon.png'),
      180
    );
    
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

main();
