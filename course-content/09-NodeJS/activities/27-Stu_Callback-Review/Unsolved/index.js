const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  const dogs = [];
  const cats = [];

  animalJSON.forEach((animal) => {
    if (animal.species === 'dog') {
      dogs.push(animal);
    } else {
      cats.push(animal);
    }
  });
  fs.writeFile('dogs.JSON', JSON.stringify(dogs), function(err) {
    if (err) {
      throw err;
    } else {
      console.log('done');
    }
  })
  fs.writeFile('cats.JSON', JSON.stringify(cats), function(err) {
    if (err) {
      throw err;
    } else {
      console.log('done');
    }
  })
  // Create two new arrays to contain the cats and dogs objects

});
