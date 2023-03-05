const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    // why are all these return undefined?
  console.log(this.title, this.author, this.price);
  return this.price * 0.5;
};

// TODO: Create a model named `Book`
const Book = mongoose.model("Book", bookSchema);

// TODO: Create a new instance of the model
const discountedBook = new Book({
  title: "hello world",
  author: "brian",
  price: 100,
});
// TODO: Call the custom instance method on the instance
discountedBook.getDiscount();

console.log(discountedBook);
module.exports = Book;
