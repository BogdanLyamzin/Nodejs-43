const {sendMail} = require("../../utils");
const {nanoid} = require("nanoid");
const {user: service} = require("../../services");

const register = async(req, res, next) => {
    try {
        const confirmCode = nanoid();
        const newUser = await service.add({...req.body, confirmCode});
        
        const data = {
            to: newUser.email,
            subject: "Подтвеждение email",
            html: `<a target="_blank" href="http://localhost:3000/api/v1/auth/confirm?confirmCode=${confirmCode}">Подтвердить регистрацию</a>`
        };
        await sendMail(data);
        res.status(201).json({
            status: "success",
            code: 201,
            message: "Succes register"
        });
    }
    catch(error){
        next(error);
    }
}