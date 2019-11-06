const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000);
console.log('Server is online.');

app.post('/webhook/', function(req, res) {
    // リクエストボディを出力
    console.log(req.body);
    // パラメータ名、nameを出力
    console.log(req.body.name);

    res.send(JSON.stringify({
  "fulfillmentText": "Text response",
  "fulfillmentMessages": [
    {
      "text": {
        "text": ["Text response"]
      }
    }
  ],
  "source": "<Text response>"
}));
})


