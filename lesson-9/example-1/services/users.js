const {User} = require("../models");

const add = (newUser) => {
    return User.create(newUser);
}

const update = (id, updateUser)=> {
    return User.findByIdAndUpdate(id, updateUser, {new: true});
}

module.exports = {
    add,
    update
};