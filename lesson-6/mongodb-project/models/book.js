const {model} = require("mongoose");

const {bookSchema} = require("./schemas");

const Book = model("book", bookSchema);

module.exports = Book;