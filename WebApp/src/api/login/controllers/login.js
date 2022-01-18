
'use strict';

/**
 * A set of functions called "actions" for `login`
 */

module.exports = {exampleAction: async (ctx, next) => {
    console.log(ctx.request.body)
    try {
      
      ctx.body = 'ok';
      
    } catch (err) {
      ctx.body = err;
    }

  }
};
