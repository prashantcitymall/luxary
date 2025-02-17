const fs = require('fs');
const https = require('https');
const path = require('path');

const propertyTypes = [
  {
    name: 'hotels',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
  },
  {
    name: 'holiday-homes',
    url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80'
  },
  {
    name: 'resorts',
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80'
  },
  {
    name: 'villas',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
  },
  {
    name: 'apartments',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
  },
  {
    name: 'guest-houses',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
  },
  {
    name: 'cottages',
    url: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80'
  },
  {
    name: 'hostels',
    url: 'https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&q=80'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download: ${res.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', reject);
    }).on('error', reject);
  });
};

async function downloadAllImages() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images', 'property-types');
  
  // Create directories if they don't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const propertyType of propertyTypes) {
    const filepath = path.join(imagesDir, `${propertyType.name}.jpg`);
    console.log(`Downloading ${propertyType.name}...`);
    try {
      await downloadImage(propertyType.url, filepath);
      console.log(`✓ Downloaded ${propertyType.name}`);
    } catch (error) {
      console.error(`✗ Failed to download ${propertyType.name}:`, error);
    }
  }
}

downloadAllImages().then(() => {
  console.log('All downloads completed!');
}).catch(console.error);
