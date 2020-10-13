"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  getTodos: async (ctx) => {
    const user = ctx.state.user;
    console.log("USER", user);
    if (!user) {
      ctx.unauthorized("Not authorized");
    }
    return await strapi.services.todo.getTodos(user.id);
  },
  removeCompleted: async (ctx) => {
    try {
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);
      return await strapi.services.todo.removeCompleted(id);
    } catch (error) {
      return null;
    }
  },
  createTodo: async (ctx) => {
    try {
      const { id } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);
      const todo = await strapi.services.todo.createTodo(id, ctx.request.body);
      return todo;
    } catch (error) {
      return null;
    }
  },
  updateTodo: async (ctx) => {
    try {
      const { id } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);
      const todo = await strapi.services.todo.updateTodo(
        id,
        ctx.params.id,
        ctx.request.body
      );
      if (!todo) {
        return ctx.unauthorized("You can't update this entry");
      }
      return todo;
    } catch (error) {
      throw error;
    }
  },
};
