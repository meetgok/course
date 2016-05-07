var request = require('request');
var url = 'http://ip-api.com/json';

module.exports = function(name, callback){
	request(
		{url: url, json: true},
	function (error, response, body) {
		if(error){
			callback('unable to fetch location');
		} else {
			console.log(name);
			console.log("koordinat veriyorum");
			callback(JSON.stringify(body, null, 3));
		}
	});
}