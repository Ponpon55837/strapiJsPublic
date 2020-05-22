'use strict';
const { sanitizeEntity } = require('strapi-utils')

module.exports = {
  async find(ctx) {
    let entities;
    ctx.set('Content-Range', await strapi.services.park.count()) // <--- Add this guy
    if (ctx.query._q) {
      entities = await strapi.services.park.search(ctx.query)
    } else {
      entities = await strapi.services.park.find(ctx.query)
    }

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.park })
    )
  },
}
