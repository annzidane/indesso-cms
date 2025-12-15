export default (config, { strapi }) => {
  return async (ctx, next) => {
    try {
      const files = ctx.request?.files;
      if (files) {
        const fileArray = Array.isArray(files.files) ? files.files : [files.files];

        for (const file of fileArray) {
          if (!file) continue;
          const sizeMB = file.size / (1024 * 1024);
          const mime = file.type || file.mimetype || '';

          if (mime.startsWith('video/')) {
            if (sizeMB > 100) {
              return ctx.badRequest(`File video terlalu besar. Maksimal 100 MB. Ukuran file: ${sizeMB.toFixed(2)} MB`);
            }
          } else if (mime.startsWith('image/') || mime === 'application/pdf') {
            if (sizeMB > 5) {
              return ctx.badRequest(`File terlalu besar. Maksimal 5 MB. Ukuran file: ${sizeMB.toFixed(2)} MB`);
            }
          } else {
            if (sizeMB > 5) {
              return ctx.badRequest(`File terlalu besar. Maksimal 5 MB. Ukuran file: ${sizeMB.toFixed(2)} MB`);
            }
          }
        }
      }
    } catch (err) {
      // swallow errors and continue to next middleware
      strapi.log.error('upload-size middleware error', err);
    }

    await next();
  };
};
