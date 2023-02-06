// Dependencies
// =============================================================

// Require the sequelize library
// Require the connection to the database (connection.js)
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
// Create a "Book" model with the following configuration

// class Book extends Model {};
// // 1. A title property of type STRING
// // 2. An author property of type STRING
// // 3. A genre property of type STRING
// // 4. A pages property of type INTEGER
// Book.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       title: {
//         type: DataTypes.STRING,
//       },
//       author: {
//         type: DataTypes.STRING,
//       },
//       genre: {
//         type: DataTypes.STRING,
//       },
//       pages: {
//         type: DataTypes.INTEGER,
//       }
//     },
//     {
//       sequelize,
//     //   timestamps: false,
//     //   freezeTableName: true,
//     //   underscored: true,
//       modelName: 'book',
//     }
//   );

// Sync model with DB
var Book = sequelize.define("book", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER
  });
  
  // Syncs with DB
  Book.sync();

// Export the book model for other files to use
module.exports = Book;