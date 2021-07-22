const {books: service} = require("../../services");

const getById = async(req, res, next) => {
    const {id} = req.params;
    try {
        const result = await service.getById(id);
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch(error){
        if(error.message.includes("Cast to ObjectId failed")){
            error.code = 404;
        }
        next(error);
    }
};

module.exports = getById;