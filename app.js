


var https = require('https');

 var options = {
	host: 'https://api.appannie.com/v1.1/intelligence/apps/ios/usage-ranking?countries=US&categories=Overall&device=ios', 
	method: 'GET',
	headers: {
		'Authorization': 'Bearer 01c6a42771526b3dad7dcf5e9f1af39e356536d6'
	}
 };


var req = https.request(options, function(res){
	console.log('statusCode: ', res.statusCode);
	console.log('headers: ', res.headers);

	res.on('data', function(d){
		console.log(d);
	});
});

req.end();

req.on('error', function(e){
	console.error(e);
});