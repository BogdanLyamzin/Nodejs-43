const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().min(0).required(),
    isActive: Joi.boolean()
});

const validateProduct = (obj) => {
    const {error} = schema.validate(obj);
};

module.exports = validateProduct;