"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  getTodos(userId) {
    return strapi.query("todo").find({ user: userId });
  },
  removeCompleted(userId) {
    return strapi.query("todo").delete({ user: userId, completed: true });
  },
  async createTodo(userId, params) {
    const todo = await strapi.query("todo").create({
      ...params,
      user: userId,
    });
    return {
      todo,
    };
  },
  async updateTodo(userId, todoId, params) {
    const [todo] = await strapi.query("todo").find({ id: todoId });
    if (!todo || todo.user.id !== userId) {
      return null;
    }
    const updatePayload = {
      ...Object.keys(params).reduce(
        (acc, key) => ({ ...acc, ...{ [key]: params[key] } }),
        {}
      ),
    };
    const updatedTodo = await strapi.query("todo").update(
      {
        id: todoId,
      },
      updatePayload
    );
    return {
      todo: updatedTodo,
    };
  },
};
