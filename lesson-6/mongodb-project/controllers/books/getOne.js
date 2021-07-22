const {books: service} = require("../../services");

const getOne = async(req, res, next) => {
    console.log(req.query)
    try {
        const result = await service.getOne(req.query);
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = getOne;