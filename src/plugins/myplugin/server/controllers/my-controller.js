'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('myplugin')
      .service('myService')
      .getWelcomeMessage();
  },
};
