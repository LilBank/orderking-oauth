var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var axios = require('axios');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: 'orderking.buzzfreeze@gmail.com',
            pass: 'orderking1'
    }
});

function sendOTP(recipient,message){
    const mailOptions = {
        from: 'orderking.buzzfreeze@gmail.com',
        to: recipient,
        subject: 'OTP test',
        html: '<p>'+message+'<p>'
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    });
}

router.get('/password/:userId/recipient/:email', function(req, res, next) { 
    axios.get('http://128.199.204.164:7868/users/'+req.params.userId).then(response => {
        sendOTP(req.params.email,JSON.stringify(response.data.password));
    }).catch(error => {
        console.log(error);
    });
    res.send(res.statusCode);
});

router.get('/passcode/:userId/recipient/:email', function(req, res, next) { 
    axios.get('http://128.199.204.164:7868/groups/'+req.params.userId).then(response => {
        sendOTP(req.params.email,JSON.stringify(response.data.passlock));
    }).catch(error => {
        console.log(error);
    });
    res.send(res.statusCode);
});

module.exports = router;