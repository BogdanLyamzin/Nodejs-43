const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_KEY} = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendMail = async({to, subject, text = "", html}) => {
    try {
        const mail = {
            from: "bogdan.lyamzin.d@gmail.com",
            to, subject, text, html};
        const result = await sgMail.send(mail);
        return result;
    }
    catch(error){
        throw error;
    }
}

module.exports = sendMail;
