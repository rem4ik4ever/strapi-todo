'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  removeCompleted() {
    return strapi.query('todo').delete({completed: true});
  }
};
