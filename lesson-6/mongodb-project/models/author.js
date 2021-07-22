const {model} = require("mongoose");

const {authorSchema} = require("./schemas");

const Author = model("author", authorSchema);

module.exports = Author;