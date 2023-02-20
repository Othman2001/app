/**
 * A set of functions called "actions" for `articles`
 */
import * as Koa from "koa"

export default {
  exampleAction: async (ctx:Koa.Context, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },
  find: async (ctx, next) => {
    try {
      const {id} =ctx.params; 
      ctx.body = id;
    const childMinder =   await strapi.db.query("api::child-minder.child-minder").findOne({
                where:{id}
      })
      ctx.
      ctx.body = {
        message:"successfull",
        data:childMinder
      }
    } catch (err) {
      ctx.body = err;
    }
  },
};
