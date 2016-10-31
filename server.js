

var request = require('request-promise');

var fs = require('fs');

var csv = require('fast-csv');


// ################################## Usage Intelligence #############################################

//###### iOS or Android ######

var market = "ios";
// var market = "all-android"

//###### Device options = iphone, ipad, ios, android, android phone, android tablet ######

// var device = "ios";
var device = "iphone";
// var device = "ipad";
// var device = "android";
// var device = "android_phone";
// var device = "android_tablet";




var options = {
	method: 'GET', 
	uri: 'https://api.appannie.com/v1.1/intelligence/apps/' + market + '/usage-ranking?countries=US&categories=Overall&device=' + device + '',
	json: true,
	headers: {
		'Authorization': 'Bearer 01c6a42771526b3dad7dcf5e9f1af39e356536d6'
	}
};


request(options)
	.then(function(response){

			console.log(response)

			var json = response.list;

			// CSV part

			 var ws = fs.createWriteStream("appAnnie.csv");
			 csv.write(json

			 	, {headers: true})
			 .pipe(ws);  
		
	})
	.catch(function(err){
		console.log('something happened: ', err);
	})





