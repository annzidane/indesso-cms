/**
 * Script untuk update URL assets di database sesuai MINIO_CDN_URL di .env
 * Gunakan ini jika sudah migrasi ke MinIO tapi perlu update domain/URL
 * Termasuk update URL di kolom formats (thumbnail, small, medium, large)
 * 
 * Jalankan dengan: node scripts/update-minio-urls.js
 */

const mysql = require('mysql2/promise');
require('dotenv').config();

const DB_CONFIG = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME,
};

const NEW_CDN_URL = process.env.MINIO_CDN_URL;

// Pattern URL lama yang akan diganti (tambahkan sesuai kebutuhan)
const OLD_URL_PATTERNS = [
  'http://192.168.10.5:9000/indesso',
  'http://192.168.10.5/indesso',
  'https://192.168.10.5:9000/indesso',
  'https://192.168.10.5/indesso',
  'http://s3-local.deptechdigital.com/indesso',
];

async function updateMinioUrls() {
  console.log('🚀 Memulai update URL MinIO di database...\n');
  console.log(`📍 URL baru: ${NEW_CDN_URL}\n`);

  // Koneksi ke database
  let connection;
  try {
    connection = await mysql.createConnection(DB_CONFIG);
    console.log('✅ Terhubung ke database\n');
  } catch (error) {
    console.error('❌ Gagal koneksi ke database:', error.message);
    return;
  }

  let totalUrlUpdated = 0;
  let totalFormatsUpdated = 0;

  // ==========================================
  // 1. Update kolom 'url'
  // ==========================================
  console.log('📌 Updating kolom URL...\n');
  
  for (const oldUrl of OLD_URL_PATTERNS) {
    try {
      // Cek berapa banyak file yang match
      const [countResult] = await connection.execute(
        `SELECT COUNT(*) as count FROM files WHERE url LIKE ?`,
        [`${oldUrl}%`]
      );
      
      const count = countResult[0].count;
      
      if (count > 0) {
        console.log(`🔍 Ditemukan ${count} file dengan URL: ${oldUrl}`);
        
        // Update URL
        const [updateResult] = await connection.execute(
          `UPDATE files SET url = REPLACE(url, ?, ?) WHERE url LIKE ?`,
          [oldUrl, NEW_CDN_URL, `${oldUrl}%`]
        );
        
        console.log(`   ✅ Updated ${updateResult.affectedRows} file(s)\n`);
        totalUrlUpdated += updateResult.affectedRows;
      }
    } catch (error) {
      console.error(`❌ Gagal update URL untuk pattern ${oldUrl}:`, error.message);
    }
  }

  // ==========================================
  // 2. Update kolom 'formats' (thumbnail, small, medium, large)
  // ==========================================
  console.log('\n📌 Updating kolom FORMATS (thumbnail, small, medium, large)...\n');
  
  for (const oldUrl of OLD_URL_PATTERNS) {
    try {
      // Cek berapa banyak file yang match di formats
      const [countResult] = await connection.execute(
        `SELECT COUNT(*) as count FROM files WHERE formats LIKE ?`,
        [`%${oldUrl}%`]
      );
      
      const count = countResult[0].count;
      
      if (count > 0) {
        console.log(`🔍 Ditemukan ${count} file dengan formats URL: ${oldUrl}`);
        
        // Update formats - replace URL dalam JSON string
        const [updateResult] = await connection.execute(
          `UPDATE files SET formats = REPLACE(formats, ?, ?) WHERE formats LIKE ?`,
          [oldUrl, NEW_CDN_URL, `%${oldUrl}%`]
        );
        
        console.log(`   ✅ Updated formats di ${updateResult.affectedRows} file(s)\n`);
        totalFormatsUpdated += updateResult.affectedRows;
      }
    } catch (error) {
      console.error(`❌ Gagal update formats untuk pattern ${oldUrl}:`, error.message);
    }
  }

  // Tampilkan sample hasil
  console.log('\n📋 Sample URL setelah update:');
  const [samples] = await connection.execute(
    `SELECT name, url, formats FROM files WHERE url LIKE ? LIMIT 3`,
    [`${NEW_CDN_URL}%`]
  );
  
  samples.forEach((file, index) => {
    console.log(`\n   ${index + 1}. ${file.name}`);
    console.log(`      URL: ${file.url}`);
    if (file.formats) {
      try {
        const formats = JSON.parse(file.formats);
        const formatNames = Object.keys(formats);
        console.log(`      Formats: ${formatNames.join(', ')}`);
        if (formats.thumbnail) {
          console.log(`      Thumbnail: ${formats.thumbnail.url}`);
        }
      } catch (e) {
        console.log(`      Formats: (parse error)`);
      }
    }
  });

  // Tutup koneksi database
  await connection.end();

  console.log('\n========================================');
  console.log('📊 Hasil Update:');
  console.log(`   ✅ URL updated: ${totalUrlUpdated} file(s)`);
  console.log(`   ✅ Formats updated: ${totalFormatsUpdated} file(s)`);
  console.log(`   📍 URL baru: ${NEW_CDN_URL}`);
  console.log('========================================\n');

  if (totalUrlUpdated > 0 || totalFormatsUpdated > 0) {
    console.log('💡 Tips: Restart Strapi untuk melihat perubahan');
    console.log('   npm run develop\n');
  }
}

// Jalankan update
updateMinioUrls().catch(console.error);
