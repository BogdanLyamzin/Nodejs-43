const {user: service} = require("../../services");

const confirm = async(req, res, next) => {
    try{
        const {confirmCode} = req.query;
        const user = await service.getOne({confirmCode});
        if(!user) {
            return res.status(404).json({
                message: "Not found"
            });
        };
        await service.updateById(user._id, {confirmCode: "", active: true});
        res.send("<h2>Email успешно верифицирован</h2>");
    }
    catch(error){
        next(error);
    }
};

module.exports = confirm;