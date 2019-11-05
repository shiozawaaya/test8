'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
  // Do things
});
exports.yourAction = functions.https.onRequest(app);

const app = dialogflow();
app.intent('wether', (conv) => {
conv.ask('こんにちは！おすすめの映画を尋ねてください');
});
app.intent('movie', (conv) => {
conv.close('タイタニック');
});

