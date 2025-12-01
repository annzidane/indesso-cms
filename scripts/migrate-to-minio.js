/**
 * Script untuk migrasi assets dari folder public/uploads ke MinIO
 * dan update URL di database
 * 
 * Jalankan dengan: node scripts/migrate-to-minio.js
 */

const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

// Konfigurasi dari .env
require('dotenv').config();

const MINIO_CONFIG = {
  endpoint: `http://${process.env.MINIO_ENDPOINT}:${process.env.MINIO_PORT}`,
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY,
    secretAccessKey: process.env.MINIO_SECRET_KEY,
  },
  region: 'us-east-1',
  forcePathStyle: true,
};

const MINIO_BUCKET = process.env.MINIO_BUCKET;
const MINIO_CDN_URL = process.env.MINIO_CDN_URL;

const DB_CONFIG = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME,
};

const UPLOADS_DIR = path.join(__dirname, '..', 'public', 'uploads');

// Inisialisasi S3 Client untuk MinIO
const s3Client = new S3Client(MINIO_CONFIG);

async function uploadFileToMinio(filePath, fileName) {
  const fileContent = fs.readFileSync(filePath);
  const contentType = mime.lookup(fileName) || 'application/octet-stream';

  const command = new PutObjectCommand({
    Bucket: MINIO_BUCKET,
    Key: fileName,
    Body: fileContent,
    ContentType: contentType,
    ACL: 'public-read',
  });

  await s3Client.send(command);
  return `${MINIO_CDN_URL}/${fileName}`;
}

async function migrateAssets() {
  console.log('🚀 Memulai migrasi assets ke MinIO...\n');

  // Cek apakah folder uploads ada
  if (!fs.existsSync(UPLOADS_DIR)) {
    console.log('❌ Folder public/uploads tidak ditemukan!');
    return;
  }

  // Koneksi ke database
  let connection;
  try {
    connection = await mysql.createConnection(DB_CONFIG);
    console.log('✅ Terhubung ke database\n');
  } catch (error) {
    console.error('❌ Gagal koneksi ke database:', error.message);
    return;
  }

  // Ambil semua file dari database yang masih menggunakan URL lokal
  const [files] = await connection.execute(
    `SELECT id, name, hash, ext, url FROM files WHERE url LIKE '/uploads/%' OR url LIKE 'http://localhost%' OR url LIKE 'http://192.168.10.5/indesso/%'`
  );

  console.log(`📁 Ditemukan ${files.length} file untuk dimigrasi\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const file of files) {
    const fileName = `${file.hash}${file.ext}`;
    const localFilePath = path.join(UPLOADS_DIR, fileName);

    try {
      // Cek apakah file ada di local
      if (!fs.existsSync(localFilePath)) {
        console.log(`⚠️  File tidak ditemukan: ${fileName}`);
        errorCount++;
        continue;
      }

      // Upload ke MinIO
      console.log(`📤 Uploading: ${fileName}`);
      const newUrl = await uploadFileToMinio(localFilePath, fileName);

      // Update URL di database
      await connection.execute(
        `UPDATE files SET url = ?, provider = '@strapi/provider-upload-aws-s3' WHERE id = ?`,
        [newUrl, file.id]
      );

      console.log(`✅ Berhasil: ${fileName} -> ${newUrl}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Gagal migrasi ${fileName}:`, error.message);
      errorCount++;
    }
  }

  // Tutup koneksi database
  await connection.end();

  console.log('\n========================================');
  console.log('📊 Hasil Migrasi:');
  console.log(`   ✅ Berhasil: ${successCount} file`);
  console.log(`   ❌ Gagal: ${errorCount} file`);
  console.log('========================================\n');

  if (successCount > 0) {
    console.log('💡 Tips: Restart Strapi untuk melihat perubahan');
    console.log('   npm run develop\n');
  }
}

// Jalankan migrasi
migrateAssets().catch(console.error);
