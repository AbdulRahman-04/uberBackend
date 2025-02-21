import nodemailer from "nodemailer"
import config from "config"

let EMAIL = config.get("EMAIL")
let APP_PASS  = config.get("APP_PASS");


async function sendEmail(emailData){
 
    try {
        let validateUser = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: EMAIL,
                pass: APP_PASS
            }
        })
        let sending = validateUser.sendMail({
            from: `From Abdul Rahman ${EMAIL}`,
            subject: emailData.subject, 
            to: emailData.to,
            text: emailData.text 
        });

        console.log(`email sent succesffully`);
        
    } catch (error) {
        
    }


}


let sendingObj = {
    subject: "GREET",
    to: "suhail@code.in",
    text: "hello suhail bhai"
}

sendEmail(sendingObj)

// export default sendEmail;