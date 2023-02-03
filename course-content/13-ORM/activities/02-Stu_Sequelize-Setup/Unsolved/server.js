const express = require('express');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
