'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('p-user')
      .service('myService')
      .getWelcomeMessage();
  },
};
