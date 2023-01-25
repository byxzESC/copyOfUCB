const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  const dogs = [];
  const cats = [];

  animalJSON.forEach(({species}, i, animal) => {
    if (species === 'dog') {
      dogs.push(animal[i]);
    } else {
      cats.push(animal[i]);
    }
  });
  fs.writeFile('dogs.JSON', JSON.stringify(dogs, null, 2), function(err) {
    if (err) {
      throw err;
    } else {
      console.log('done');
    }
  })
  fs.writeFile('cats.JSON', JSON.stringify(cats, null, 2), function(err) {
    if (err) {
      throw err;
    } else {
      console.log('done');
    }
  })

  // Create two new arrays to contain the cats and dogs objects

});
