
const nodemailer = require('nodemailer')
const config = require('./config.json')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


function email() { }

email.prototype.sendEMail = async function (name, sender, subject, message, res) {
    const oauth2Client = new OAuth2({
        clientId: config.oAuth.clientId,
        clientSecret: config.oAuth.clientSecret,
        redirectUri: config.oAuth.redirectionURL
    }
    );
    oauth2Client.setCredentials({
        refresh_token: config.oAuth.refreshToken
    });
    const accessToken = oauth2Client.getAccessToken()

    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: config.userAccount.email,
            clientId: config.oAuth.clientId,
            clientSecret: config.oAuth.clientSecret,
            refreshToken: config.oAuth.refreshToken,
            accessToken: accessToken
        }
    });

    var html = `Sender: ${sender} <br>` + 
                `Sender's Name: ${name} <br>` +
                `Message: ${message} <br>` 
    const mailOptions = {
        from: config.userAccount.email,
        to: config.userAccount.email,
        subject: subject,
        generateTextFromHTML: true,
        html: html
    };
    smtpTransport.sendMail(mailOptions, (err, info) => {
        if (err) return err;
        return info;
    });
}


module.exports = email