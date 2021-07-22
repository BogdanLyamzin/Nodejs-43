const {authors: service} = require("../../services");

const add = async (req, res, next) => {
    try {
        const result = await service.add(req.body);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    }
    catch(error){
        if(error.message.includes("validation failed")){
            error.code = 400;
        }
        next(error);
    }
};

module.exports = add;