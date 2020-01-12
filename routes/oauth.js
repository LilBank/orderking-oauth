require('dotenv').config();
var express = require('express');
var router = express.Router();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "https://orderking-oauth-mock.herokuapp.com/oauth/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
    console.log(profile)
}));

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',passport.authenticate('facebook', { successRedirect: '/',failureRedirect: '/login' }));

module.exports = router;
