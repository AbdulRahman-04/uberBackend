import twilio from "twilio"
import config from "config"


let TOKEN = config.get("TOKEN");
let SID  = config.get("SID");
let NUMBER  = config.get("NUMBER");


const validateUser = new twilio(SID, TOKEN );

async function sendSMS(smsData){
    try {
     
        await validateUser.messages.create({
            body: smsData.body,
            to: smsData.to,
            from: NUMBER
        })

        console.log(`sms sent🙌`);
        
        
    } catch (error) {
        console.log(error);
        
    }
}

sendSMS({body: "HELLO WORLD✅", to: "+918186978069"})

// export default sendSMS;