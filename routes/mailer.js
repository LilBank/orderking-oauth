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

function sendOTP(recipient){
    const mailOptions = {
        from: 'orderking.buzzfreeze@gmail.com', // sender address
        to: recipient, // list of receivers
        subject: 'OTP test', // Subject line
        html: '<p>Just to make sure ...</p>'// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    });
}

router.get('/:email/user', function(req, res, next) { 
    sendOTP(req.params.email);
    res.send(res.statusCode);
});

router.get('/:email/driver', function(req, res, next) { 
    sendOTP(req.params.email);
    res.send(res.statusCode);
});

router.get('/:email/restaurant', function(req, res, next) { 
    sendOTP(req.params.email);
    res.send(res.statusCode);
});

module.exports = router;