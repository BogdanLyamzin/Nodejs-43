const {Schema} = require("mongoose");
const { stringify } = require("uuid");

const userSchema = Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: null
    }
});

module.exports = userSchema;