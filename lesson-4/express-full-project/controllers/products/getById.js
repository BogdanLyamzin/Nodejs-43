const products = require("../../data/products");

const getById = (req, res)=> {
    const {id} = req.params;
    /*
    req.params = {
        id: ""
    }
    */
    const product = products.find(({_id}) => _id === id);
    if(!product){
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Product with id=${id} not found`        
        });
        return;
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result: product
        }
    })
};

module.exports = getById;