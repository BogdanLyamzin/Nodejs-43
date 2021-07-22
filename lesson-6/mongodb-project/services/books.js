const {Book} = require("../models");

const getAll = () => Book.find({}).populate("author", "name");

const getById = (id) => Book.findById(id).populate("author");

const getOne = (query) => Book.findOne(query).populate("author");

const add = (newBook) => Book.create(newBook);

const update = (id, updateBook) => Book.findByIdAndUpdate(id, updateBook, {new: true});

const del = (id) => Book.findByIdAndDelete(id);

module.exports = {
    getAll,
    getById,
    getOne,
    add,
    update,
    del
}

