const {Schema} = require("mongoose");

const bookSchema = Schema({
    name: String,
    price: Number,
    author: String
});

module.exports = bookSchema;