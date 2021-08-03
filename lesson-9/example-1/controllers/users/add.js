const {users: service} = require("../../services");

const add = async(req, res, next) => {
    try {
        await service.add(req.body);
        res.status(201).json({
            status: "success",
            code: 201,
            message: "Success add user"
        })
    }
    catch(error){
        next(error);
    }
}

module.exports = add;