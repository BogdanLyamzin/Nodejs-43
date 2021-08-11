const nodemailer = require("nodemailer");
require("dotenv").config();
// настройки SMTP-протокола
const config = {
    host: "smtp.meta.ua",
    port: 465, // 25, 465, 2255
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: process.env.EMAIL_PASSWORD
    }
};

const transpoter = nodemailer.createTransport(config);

const mail = {
    to: "werog85550@asmm5.com",
    from: "bogdan.lyamzin.d@meta.ua",
    subject: "Тестовое письмо",
    text: "Тестовое письмо"
};

transpoter.sendMail(mail)
    .then(()=> console.log("Mail success send"))
    .catch(error => console.log(error));

