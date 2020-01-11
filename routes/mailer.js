var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: 'orderking.buzzfreeze@gmail.com',
            pass: 'orderking1'
    }
});

function sendOTP(mailOptions){
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    });
}

router.get('/:email/pass', function(req, res, next) {
    const mailOptions = {
        from: 'orderking.buzzfreeze@gmail.com', // sender address
        to: req.params.email, // list of receivers
        subject: 'OTP test', // Subject line
        html: '<p>Just to make sure ...</p>'// plain text body
    };
    sendOTP(mailOptions);
    res.send(res.statusCode);
});

module.exports = router;