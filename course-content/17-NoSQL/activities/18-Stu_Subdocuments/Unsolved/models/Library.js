const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  name: String,
})

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);
// TODO: Create a new instance of the model including the subdocuments
const bookData = [
  { name: 'hello world'},
  { name: 'goodbye world'},
  { name: 'not a world'}
]

Library.create(
  { name: 'sunset library', books: bookData },
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
)

module.exports = Library;
