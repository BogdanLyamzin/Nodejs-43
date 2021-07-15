const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().min(0).required(),
    isActive: Joi.boolean()
});

const validateProduct = (req, res, next) => {
    const {error} = schema.validate(req.body);
    if(error){
        res.status(400).json({
            status: "error",
            code: 400,
            messsage: error.message
        });
        return;
    };
    next();
};

module.exports = validateProduct;