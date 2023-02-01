// requiring express and mysql2
const express = require('express');
const mysql = require('mysql2');

// set port to 3001
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// creating a connect to a database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'asdf',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// simple query
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
  if(results){
    results.forEach(function(student){
    console.log(student)
  })
  }
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
