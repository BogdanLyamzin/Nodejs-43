const products = require("../../data/products");

const updateStatus = (req, res) => {
    
    const {body, params: {id}} = req;
    if(typeof body.isActive !== "boolean"){
        res.status(400).json({
            status: "error",
            code: 400,
            message: "Status must be true or false"
        })
    }
    const idx = products.findIndex(({_id}) => _id === id);
    if(idx === -1) {
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Product with id=${id} not found`        
        });
        return;
    }
    products[idx] = {...products[idx], isActive: body.isActive};
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products[idx]
        }
    })
};

module.exports = updateStatus;