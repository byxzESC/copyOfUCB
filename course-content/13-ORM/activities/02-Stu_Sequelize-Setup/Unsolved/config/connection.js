const Sequelize = require('sequelize');
// require('dotenv').config();

const sequelize = new Sequelize(
  process.env.dbName,
  process.env.dbUser,
  process.env.dbPassword,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
