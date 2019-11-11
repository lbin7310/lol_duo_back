const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize('lolDuo', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

db.sync({force: false}).then(() => {
  console.log("Database & tables created")
}).catch (error => console.log(error));
