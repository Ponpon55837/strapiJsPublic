'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  find(params, populate) {
    console.log("Service called products")
    return strapi.query('product').find(params, populate)
  }
};
