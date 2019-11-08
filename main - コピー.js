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

// ルート（http://localhost/）にアクセスしてきたときに「Hello」を返す
app.get('/', (req, res) => 	res.send('Hello'));


// webhookにpostリクエストがあった場合の処理
app.post('/webhook/', function(req, res) {
    // リクエストボディを出力
    console.log(req.body);

	var bodyyy = req.body;
	var mplace = bodyyy.place;

	if(mplace == '山梨'){
		res.send(JSON.stringify({
			"fulfillmentText": "fulfillmentText",
			"fulfillmentMessages": [
				{
					"text": {
						"text": ["多分晴れます"]
							}
				}
			],
			"source": "<Text response>"
		}))
		console.log(mplace);		
	}
})
