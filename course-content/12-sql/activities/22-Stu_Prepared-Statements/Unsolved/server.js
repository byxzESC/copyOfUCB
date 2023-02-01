const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: 'asdf',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// Query database

let deletedRow = 2;

db.query(`DELETE FROM favorite_books WHERE id = ?`, deletedRow, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log('this is the result on successful delete')
  console.log(result);
});

// Query database
db.query('SELECT * FROM favorite_books', function (err, results) {
  console.log('this is the whole table from line 38')
  console.log(`this is the whole table from line 38 ${JSON.parse(results)}`);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



function startWith (string, searchStr, position) {
  let result = false;
    if (position) {
      if (searchStr.charAt(position) === string) {
        result = true;
      }
    } else {
      if (searchStr.charAt(0) === string) {
        result = true;
      }
    }

  return result;
}