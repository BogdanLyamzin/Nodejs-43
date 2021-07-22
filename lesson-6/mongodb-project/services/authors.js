const {Author} = require("../models");

const getAll = () => Author.find({});

const add = (newAuthor) => Author.create(newAuthor);

module.exports = {
    getAll,
    add
}

