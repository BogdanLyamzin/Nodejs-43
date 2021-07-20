const products = require("../../data/products");

const del = (req, res)=> {
    const {id} = req.params;
    const idx = products.findIndex(({_id}) => _id === id);
    if(idx === -1) {
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Product with id=${id} not found`        
        });
        return;
    }
    const deleteProduct = products[idx];
    products.splice(idx, 1);
    res.json({
        status: "success",
        code: 200,
        data: {
            result: deleteProduct
        }
    })
};

module.exports = del;