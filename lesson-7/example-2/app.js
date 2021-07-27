const bcrypt = require("bcryptjs");

const password = "password";

const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// console.log(hashPassword)

const result = bcrypt.compareSync("password", hashPassword);
console.log(result);