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
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
