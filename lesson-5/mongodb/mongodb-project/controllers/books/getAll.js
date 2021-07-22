const {Book} = require("../../models");

const getAll = async (req, res, next) => {
    try {
        const result = await Book.find({});
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch(error){

    }
};

module.exports = getAll;