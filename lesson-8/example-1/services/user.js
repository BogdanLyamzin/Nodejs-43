// const bcrypt = require("bcryptjs");

const {User} = require("../models");

const getAll = () => {
    return User.find({});
}

const getOne = (filter) => {
    return User.findOne(filter);
}

const getById = (id) => {
    return User.findById(id);
};

const add = ({email, password}) => {
    const newUser = new User({email});
    newUser.setPassword(password);
    return newUser.save();
    // const hashPassword = bcrypt.hashSync(password, bcrypt.getSaltSync(10));
    // return User.create({email, password: hashPassword});
}

const updateById = (id, updateInfo) => {
    return User.findByIdAndUpdate(id, updateInfo, {new: true});
}

module.exports = {
    getAll,
    getOne,
    getById,
    add,
    updateById
}