const products = require("../../data/products");

const update = (req, res) => {
    const {body, params: {id}} = req;
    const idx = products.findIndex(({_id}) => _id === id);
    if(idx === -1) {
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Product with id=${id} not found`        
        });
        return;
    }
    products[idx] = {...products[idx], ...body};
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products[idx]
        }
    })
};

module.exports = update;