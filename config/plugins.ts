export default ({ env }) => ({
  // Upload provider - MinIO with CDN support via overridePath
  upload: {
    config: {
      provider: 'strapi-provider-upload-tp-minio',
      providerOptions: {
        accessKey: env('MINIO_ACCESS_KEY'),
        secretKey: env('MINIO_SECRET_KEY'),
        bucket: env('MINIO_BUCKET'),
        endPoint: env('MINIO_ENDPOINT'),
        port: parseInt(env('MINIO_PORT', '9000')),
        useSSL: false,
        folder: '',
        overridePath: env('MINIO_CDN_URL'),
      },
      sizeLimit: 100 * 1024 * 1024, // 100 MB untuk video (max global)
      breakpoints: {
        large: 1000,
        medium: 750,
        small: 500,
        thumbnail: 156,
      },
    },
  },
  // Email provider
  email: {
    config: {
      provider: 'sendmail',
      providerOptions: {
        host: env('SMTP_HOST', 'sandbox.smtp.mailtrap.io'),
        port: env.int('SMTP_PORT', 2525),
        auth: {
          user: env('SMTP_USER', 'd9c2247f62645d'),
          pass: env('SMTP_PASS', '96c6bd4a57407b'),
        },
      },
      settings: {
        defaultFrom: 'no-reply@example.com',
        defaultReplyTo: 'support@example.com',
      },
    },
  },
  'strapi-v5-plugin-populate-deep': {
    config: {
      defaultDepth: 5,
    },
  },
});