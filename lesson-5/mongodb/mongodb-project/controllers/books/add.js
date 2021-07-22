const {Book} = require("../../models");

const add = async (req, res, next) => {
    try {
        const result = await Book.create(req.body);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    }
    catch(error){

    }
};

module.exports = add;