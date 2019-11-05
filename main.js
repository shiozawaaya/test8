const API_KEY = 'YOUR_API_KEY_HERE';
module.exports = API_KEY;
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const API_KEY = require('./apiKey');

//初期化
'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
  // Do things
});
exports.yourAction = functions.https.onRequest(app);

//返答
const app = dialogflow();
app.intent('wether', (conv, {place}) => {
conv.close(`きっと晴れます。`);
});


server.listen((process.env.PORT || 3000), () => {
    console.log("Server is up and running...");
});