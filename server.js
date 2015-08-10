var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var firebase = require('firebase');

var twilio = require('twilio');

var accountSid = 'ACd950127f41333ba38b210a17d6723211'; 
var authToken = 'b6a6446bd33956728814f246c9207f8e'; 


var client = twilio(accountSid, authToken);

var ref = new firebase("https://textsupportninja.firebaseio.com/numbers");


var app = express();

var port = 4000;

app.use(express.static(__dirname + '/public'));

//app.use(bodyParser());

app.use(cors());

//for deprecated error, if not use app.use(bodyParser());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());



app.listen(port, function(){
 console.log('Im watching you port 4000')
});

