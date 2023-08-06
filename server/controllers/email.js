
const nodemailer = require("nodemailer")

var transport = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: process.env.BREVO_MAIL_USER,
        pass: process.env.BREVO_MAIL_PASS
    }
});



exports.sendEmail = async (req, res) => {

    try {

        const sender = { name: req.body.user_name, email: req.body.user_email }
        const mailList = 'dmobley0608@gmail.com, khipmiller56@gmail.com'
        await transport.sendMail({
            from: "request@peachstateeuro.com",
            to: 'dmobley0608@gmail.com, khipmiller56@gmail.com',
            subject: "New Request",
            html: `
            <!doctype html>
            <html>
              <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
              </head>
              <body style="font-family: sans-serif;">
                <div style="display: block; margin: auto; max-width: 600px;" class="main">
                  <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">You have a new service request from ${sender.name}!
                  <br/>They can be reached at ${sender.email}</h1>
                  <h3>MESSAGE:</h3>
                  <h4>${req.body.message}</h4>                  
                </div>
                <!-- Example of invalid for email html/css, will be detected by Mailtrap: -->
                <style>
                  .main { background-color: white; }
                  a:hover { border-left-width: 1em; min-height: 2em; }
                </style>
              </body>
            </html>
            `
        })
        await transport.sendMail({
            from: "info@peachstateeuro.com",
            to: [sender.email],
            subject: "Thank you for reaching out!",
            html: `
            <!doctype html>
            <html>
              <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
              </head>
              <body style="font-family: sans-serif;">
                <div style="display: block; margin: auto; max-width: 600px;" class="main">
                  <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">Thank you for contacting Peach State Euro!
                  <br/>A member of our staff will be in touch shortly.</h1>
                  <img src='https://peachstateeuro.com/static/media/alt_logo.a1e658aec2cc208c0e20.png'/>                  
                </div>
                <!-- Example of invalid for email html/css, will be detected by Mailtrap: -->
                <style>
                  .main { background-color: white; }
                  a:hover { border-left-width: 1em; min-height: 2em; }
                </style>
              </body>
            </html>
            `
        })
        res.status(200).json("Message Sent Successfully")
    } catch (err) {
        console.log(err)
        res.status(500).json(err.message)
    }
}