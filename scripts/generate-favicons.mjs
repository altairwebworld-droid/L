import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const src = resolve('public/favicon.png');
const publicDir = resolve('public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

async function generate() {
  for (const { name, size } of sizes) {
    await sharp(src)
      .resize(size, size, { fit: 'cover' })
      .png()
      .toFile(resolve(publicDir, name));
    console.log(`✓ ${name} (${size}x${size})`);
  }

  // Generate ICO from 16, 32, 48 sizes
  const ico16 = await sharp(src).resize(16, 16, { fit: 'cover' }).png().toBuffer();
  const ico32 = await sharp(src).resize(32, 32, { fit: 'cover' }).png().toBuffer();
  const ico48 = await sharp(src).resize(48, 48, { fit: 'cover' }).png().toBuffer();

  // Build a simple ICO file with PNG entries
  const images = [ico16, ico32, ico48];
  const headerSize = 6;
  const entrySize = 16;
  const dataOffset = headerSize + entrySize * images.length;

  let offset = dataOffset;
  const entries = [];
  const dims = [16, 32, 48];

  for (let i = 0; i < images.length; i++) {
    const buf = Buffer.alloc(entrySize);
    buf.writeUInt8(dims[i] === 256 ? 0 : dims[i], 0); // width
    buf.writeUInt8(dims[i] === 256 ? 0 : dims[i], 1); // height
    buf.writeUInt8(0, 2);  // color palette
    buf.writeUInt8(0, 3);  // reserved
    buf.writeUInt16LE(1, 4); // color planes
    buf.writeUInt16LE(32, 6); // bits per pixel
    buf.writeUInt32LE(images[i].length, 8); // image size
    buf.writeUInt32LE(offset, 12); // offset
    entries.push(buf);
    offset += images[i].length;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(images.length, 4); // number of images

  const ico = Buffer.concat([header, ...entries, ...images]);
  writeFileSync(resolve(publicDir, 'favicon.ico'), ico);
  console.log('✓ favicon.ico (16+32+48)');

  console.log('\nAll favicons regenerated!');
}

generate().catch(console.error);
