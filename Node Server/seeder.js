async function initSeed() {
  const config = require("./src/config/index");
  config.initEnvironmentVariables();

  const sequelize = require("./src/config/lib/sequelize");
  const User = require("./src/modules/users/user.model");
  const Todo = require("./src/modules/todos/todo.model");
  const async = require("async");

  await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
  await sequelize.sync();

  async.waterfall([userSeeder, todoSeeder], (err, res) => {
    if (err) console.error(err);
    else console.log("---DB Seed Completed---");
    process.exit();
  });

  function userSeeder(cb) {
    User.findOrCreate({
      where: { email: "admin@todo.com" },
      defaults: {
        firstName: "Todo",
        lastName: "Admin",
        password: "Password",
      },
    }).then((users) => {
      console.log("---------User seed completed----------");
      cb(null, users[0].id);
    });
  }

  function todoSeeder(userId, cb) {
    Todo.findOrCreate({
      where: { title: "Buy groceries" },
      defaults: {
        description: "Buy milk, eggs, and bread",
        dueDate: "12-12-24",
        createdBy: userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }).then((todos) => {
      console.log("---------Todo seed completed---------");
      cb(null, todos[0].id);
    });
  }
}

initSeed();
