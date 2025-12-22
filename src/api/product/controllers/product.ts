/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    // Get the search query from _q parameter (used by Strapi admin)
    const searchQuery = (ctx.query as any)?._q;

    if (searchQuery) {
      // Custom search logic that includes botanical relation
      const entities = await strapi.entityService.findMany('api::product.product', {
        ...query,
        filters: {
          ...(query?.filters as any),
          $or: [
            { name: { $containsi: searchQuery } },
            { slug: { $containsi: searchQuery } },
            {
              botanical: {
                name: { $containsi: searchQuery }
              }
            },
            {
              botanical: {
                scientific_name: { $containsi: searchQuery }
              }
            }
          ]
        },
        populate: ['botanical']
      });

      const sanitizedResults = await this.sanitizeOutput(entities, ctx);

      return this.transformResponse(sanitizedResults);
    }

    // Default behavior if no search
    return super.find(ctx);
  }
}));
