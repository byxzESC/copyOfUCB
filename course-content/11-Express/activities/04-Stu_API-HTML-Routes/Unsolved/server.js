// TODO: Import express
const express = require('express')
const terms = require('./terms.json')
// TODO: Import 'terms.json' file
// TODO: Initialize app variable
const app = express();
const PORT = 3001;

app.get('/', (req, res) => res.send('Visit http://localhost:3001/api/terms'))

// TODO: Create a route for a GET request that will return the content of our `termData.json` file
app.get('/api/terms', (req, res) => {
  res.json(terms);
})



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
