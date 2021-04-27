const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service: "gmail",
    auth: {
        type: "login",
        user: process.env.MAIL_NAME,
        pass: process.env.MAIL_PASS
    }
});

const mailOptions = (user) =>{
    return {
        from: process.env.MAIL_NAME,
        to: user.email,
        subject: "Account created",
       html: "Thank you for creating an account"
    }
}


exports.send_account_creation_email = (user) => {
    transport.sendMail(mailOptions(user));
    
}