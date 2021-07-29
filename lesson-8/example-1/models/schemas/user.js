const {Schema} = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
}, {versionKey: false, timestamps: true});

userSchema.methods.setPassword = function(password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = userSchema;