const {books: service} = require("../../services");

const update = async(req, res, next) => {
    const {id} = req.params;
    try {
        const result = await service.update(id, req.body);
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        });
    }
    catch(error){
        if(eror.message.includes("validation failed")){
            error.code = 400;
        }
        next(error);
    }
};

module.exports = update;