const jwt = require("jsonwebtoken");
require("dotenv").config();

const {user: service} = require("../../services");

const login = async(req, res, next) => {
    const {email, password} = req.body;
    try {
        const user = await service.getOne({email});
        if(!user || !user.comparePassword(password)){
            return res.status(400).json({
                status: "error",
                code: 400,
                message: "wrong email or password"
            })
        };
        // if(!user){
        //     return res.status(400).json({
        //         status: "error",
        //         code: 400,
        //         message: "No such email"
        //     });
        // }
        // if(!user.comparePassword(password)) {
        //     return res.status(400).json({
        //         status: "error",
        //         code: 400,
        //         message: "Wrong password"
        //     });
        // }
        const {SECRET_KEY} = process.env;
        const payload = {
            id: user._id
        };
        const token = jwt.sign(payload, SECRET_KEY);
        res.json({
            status: "success",
            code: 200,
            data: {
                token
            }
        })
    }
    catch(error){
        next(error);
    }
}

module.exports = login;