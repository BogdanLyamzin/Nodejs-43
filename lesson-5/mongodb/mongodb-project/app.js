const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const api = require("./api");

const app = express();

app.use(cors());

app.use("/api/v1/books", api.books);

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    app.listen(PORT);
})
.catch(error => console.log(error));


