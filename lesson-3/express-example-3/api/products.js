const express = require("express");

const products = require("../data/products");

const router = express.Router();

router.get("/", (req, res)=>{
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    });
});

router.get("/:id", (req, res)=> {
    const {id} = req.params;
    const product = products.find(({_id}) => _id === id);
    if(!product){
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Product with id=${id} not found`        
        });
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result: product
        }
    })
})

module.exports = router;

