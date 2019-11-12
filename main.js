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
	var pdate = bodyyy.queryResult.parameters.date;
	console.log(pdate);

	if(pdate == '2019-11-10T12:00:00+09:00'){
			var resp = '着付けだよ'
	}else if(pdate == '2019-11-13T12:00:00+09:00'){
			var resp = '宅急便受け取りだよ'
	}else if(pdate == '2019-11-14T12:00:00+09:00'){
			var resp = 'しゅんくんと夕飯だよ'
	}else if(pdate == '2019-11-15T12:00:00+09:00'){
			var resp = 'サークルの飲み会だよ'
	}else if(pdate == '2019-11-16T12:00:00+09:00'){
			var resp = 'ネイル＆コルギだよ'
	}else if(pdate == '2019-11-17T12:00:00+09:00'){
			var resp = '岡ちゃんとご飯だよ'
	}else if(pdate == '2019-11-20T12:00:00+09:00'){
			var resp = '部署の人と懇親会だよ'
	}else if(pdate == '2019-11-23T12:00:00+09:00'){
			var resp = 'しゅんくんとお出かけだよ'
	}else if(pdate == '2019-11-24T12:00:00+09:00'){
			var resp = 'TOEICだよ'
	}else if(pdate == '2019-11-27T12:00:00+09:00'){
			var resp = 'サークル＆会社の人と飲み会だよ'
	}else if(pdate == '2019-11-29T12:00:00+09:00'){
			var resp = '会社の人と飲み会だよ'
	}else if(pdate == '2019-11-30T12:00:00+09:00'){
			var resp = 'かおりんとアメフト見に行くよ'
	}else if(pdate == '2019-12-01T12:00:00+09:00'){
			var resp = '法事だよ'
	}else if(pdate == '2019-12-04T12:00:00+09:00'){
			var resp = '人間ドックだよ'
	}else if(pdate == '2019-12-07T12:00:00+09:00'){
			var resp = 'サークルの飲み会だよ'
	}else if(pdate == '2019-12-08T12:00:00+09:00'){
			var resp = '母と夕飯だよ'
	}else{
			var resp = '特にないよ！一緒に遊ぶ？'
	}

		res.send(JSON.stringify({
			"fulfillmentText": "fulfillmentText",
			"fulfillmentMessages": [
				{
					"text": {
						"text": [resp]
							}
				}
			],
			"source": "<Text response>"
		}))
})
