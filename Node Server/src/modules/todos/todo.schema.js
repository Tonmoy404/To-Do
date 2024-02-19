const { string, object, ref } = require("yup");

const createTodoSchema = object().shape({
  title: string()
    .required("Title should not be empty")
    .max(100, "Title can not be more than 100 words"),
  description: string()
    .min(2, "Description should be at least of 2 Characters")
    .max(1000, "Description can not be more than 1000 characters")
    .required("Enter Description"),
  dueDate: string().required("Enter Due Date"),
});

const updateTodoSchema = object().shape({
  title: string()
    .required("Title should not be empty")
    .max(100, "Title can not be more than 100 words"),
  description: string()
    .min(2, "Description should be at least of 2 Characters")
    .max(1000, "Description can not be more than 1000 characters")
    .required("Enter Description"),
  dueDate: string().required("Enter Due Date"),
});

module.exports.createTodoSchema = createTodoSchema;
module.exports.updateTodoSchema = updateTodoSchema;
