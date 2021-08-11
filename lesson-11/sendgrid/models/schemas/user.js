const {Schema} = require("mongoose");

const userSchema = ({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmCode: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
})