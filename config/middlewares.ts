export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            `${env('MINIO_ENDPOINT')}:${env('MINIO_PORT')}`,
            `http://${env('MINIO_ENDPOINT')}:${env('MINIO_PORT')}`,
            'https://s3-local.deptechdigital.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            `${env('MINIO_ENDPOINT')}:${env('MINIO_PORT')}`,
            `http://${env('MINIO_ENDPOINT')}:${env('MINIO_PORT')}`,
            'https://s3-local.deptechdigital.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '100mb', // Untuk form data (upload)
      jsonLimit: '10mb',  // Untuk JSON body
      textLimit: '10mb',  // Untuk text body
      formidable: {
        maxFileSize: 100 * 1024 * 1024, // 100 MB max untuk video
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
