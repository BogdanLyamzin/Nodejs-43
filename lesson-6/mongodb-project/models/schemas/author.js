const {Schema} = require("mongoose");

const authorSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        // match: /^[0-9]{3}-[0-9]{3}$/g
    }
});

module.exports = authorSchema;