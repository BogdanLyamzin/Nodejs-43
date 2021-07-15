const {v4} = require("uuid");

const products = [
    {
        _id: v4(),
        name: "iPhone X",
        price: 34000,
        isActive: true,
    },
    {
        _id: v4(),
        name: "GeForce RTX 3900",
        price: 90000,
        isActive: true
    }
];

module.exports = products;