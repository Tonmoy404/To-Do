const AuthStrategy = require("../users/user.authentication.middleware");
const validate = require("../core/middleware/validate");
const { createTodoSchema, updateTodoSchema } = require("./todo.schema");
const {
  createTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
} = require("./todo.controller");

module.exports = (app) => {
  app
    .route("/todo/new")
    .post(AuthStrategy, validate(createTodoSchema), createTodo);

  app.route("/todo/all").get(AuthStrategy, getAllTodo);
  app.route("/todo/:id").get(AuthStrategy, getTodoById);
  app
    .route("/todo/:id")
    .patch(AuthStrategy, validate(updateTodoSchema), updateTodo);
};
