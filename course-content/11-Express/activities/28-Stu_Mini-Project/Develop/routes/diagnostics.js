const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  console.info(`${req.method} request received to add a error`);

  const {errors} = req.body;
  // const time = 
  // const error_id = 
  if (req.body) {
    // time, error_id,
    const newDiagnostic = { errors};

    readAndAppend(newDiagnostic, './db/diagnostics.json');

    res.json(`new diagnostic added`);
  } else {
    res.errored(`Error in adding new diagnostic`);
  }
});

module.exports = diagnostics;
