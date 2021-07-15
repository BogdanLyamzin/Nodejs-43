const {v4} = require("uuid");

const products = require("../../data/products");

const add = (req, res) => {
    const newProduct = {...req.body, _id: v4()};

    if(!newProduct.isActive) {
        newProduct.isActive = true;
    }
    products.push(newProduct);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result: newProduct
        }
    })
};

module.exports = add;