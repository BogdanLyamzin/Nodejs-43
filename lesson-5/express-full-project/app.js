const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");

const api = require("./api");

const app = express();
// app.set("view", "views");
// app.set("view engine", "ejs");
app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
// app.use(express.static(`${__dirname}/docs`));
// /products
// /products/24
app.use("/api/v1/products", api.products);
// res.render("home", {title: "Home page"})
// app.use("/carts", api.carts);
// app.use("/customers", api.customers);

app.listen(3000);