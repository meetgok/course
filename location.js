var request = require('request');
var url = 'http://ip-api.com/json';

module.exports = function() {
		return new Promise(function (resolve, reject) {
			request({
				url: url
				, json: true
			}, function (error, responce, body) {
				if(error){
					//console.log("hata")
					reject('unable to fetch location');
				} else {
					//console.log(JSON.stringify(body, null, 3));
					resolve(body);
				}
			});
		}
	)
}