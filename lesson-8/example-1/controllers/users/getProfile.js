const jwt = require("jsonwebtoken");
require("dotenv").config();

const {user: service} = require("../../services");

const getProfile = async(req, res, next) => {
    const {email} = req.user;
    const result = {
        email
    };

    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
    // const {authorization} = req.headers;
    // if(!authorization) {
    //     return res.status(400).json({
    //         status: "error",
    //         code: 400,
    //         message: "Unauthorize"
    //     })
    // }
    // const [bearer, token] = authorization.split(" ");
    // if(bearer !== "Bearer"){
    //     return res.status(400).json({
    //         status: "error",
    //         code: 400,
    //         message: "Unauthorize"
    //     })
    // };
    // try {
    //     const {SECRET_KEY} = process.env;
    //     const {id} = jwt.verify(token, SECRET_KEY);
    //     const user = service.getById(id);

    //     const result = {
    //         email: user.email
    //     };
    //     res.json({
    //         status: "success",
    //         code: 200,
    //         data: {
    //             result
    //         }
    //     })
    // }
    // catch(error){
    //     return res.status(400).json({
    //         status: "error",
    //         code: 400,
    //         message: "Invalid token"
    //     })
    // }

};

module.exports = getProfile;