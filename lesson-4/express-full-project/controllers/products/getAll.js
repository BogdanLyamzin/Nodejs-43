const products = require("../../data/products");

const getAll = (req, res)=>{
    console.log(req.query);
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    });
};

module.exports = getAll;