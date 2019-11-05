const API_KEY = 'YOUR_API_KEY_HERE';
module.exports = API_KEY;
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const API_KEY = require('./apiKey');

//‰Šú‰»
'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
  // Do things
});
exports.yourAction = functions.https.onRequest(app);

//•Ô“š
const app = dialogflow();
app.intent('wether', (conv, {place}) => {
conv.close(`‚«‚Á‚Æ°‚ê‚Ü‚·B`);
});


server.listen((process.env.PORT || 3000), () => {
    console.log("Server is up and running...");
});