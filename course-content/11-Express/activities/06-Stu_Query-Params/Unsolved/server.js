const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('name', 'relevance', `${type}`));

// TODO: Add a comment describing the functionality of this route
// incoming url request to api/terms
app.get('/api/terms/', (req, res) => {
  // TODO: Add a comment describing the req.query object
  // return the amount query after ?q as object
  const hasQuery = Object.keys(req.query).length > 0;
  console.log(sort)
  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// TODO: Add a comment describing what this route will return
// return any terms.json
app.get('/api/term/:term', (req, res) => {
  // TODO: Add a comment describing the content of req.params in this instance
  // req.params is object term and its value
  const requestedTerm = req.params.term.toLowerCase();
  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// TODO: Add a comment describing what this route will return
// return any category json 
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// TODO: Add a comment describing what this route will return
// return query categories
app.get('/api/categories', (req, res) => {
  const categories = termData.map((term) => term.category);
  console.log('categories array is ', categories, '\n');
  console.log(categories.filter((a, b) => {
    console.log('index of element is ', a, categories.indexOf(a));
    console.log('index of the element is ', b, '\n');
    categories.indexOf(a) === b;
    })
  )
  const result = categories.filter((a, b) => categories.indexOf(a) === b);

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
