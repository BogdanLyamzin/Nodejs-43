const express = require("express");
const cors = require("cors");

const api = require("./api");

const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/public`));
// /products
// /products/24
app.use("/api/v1/products", api.products);
// app.use("/carts", api.carts);
// app.use("/customers", api.customers);

app.listen(3000);