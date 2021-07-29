const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

require("./configs/passport-config");

const api = require("./api");

const app = express();

app.use(cors());

app.use("/api/v1/auth", api.auth);
app.use("/api/v1/users", api.users);

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(PORT);
})
.catch(error => console.log(error));