const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();

app.set("json spaces", 4);
app.set("json replacer", "replacer");

app.use(cors());
app.use(express.static(`${__dirname}/public`));

app.get("/products", (req, res)=> {
    // res.send(products);
    res.json(products);
    // res.send(null);
    // res.json(null);
})

app.listen(3000);