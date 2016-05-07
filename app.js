var location = require('./location.js');
var weather = require('./weather.js');

var argv = require('yargs')
			.option('location',  {
						demand : false,
						alias : 'l',
						description : 'Location name',
						type : 'string'
					}
				)
			.help('help')
			.argv;

weather(argv.location).then(function(body) {
		console.log(argv.location);
		console.log(body.main.temp);
	}, function(error) {
		console.log(error);
		return location();
	}
).then(function(body) {
	//	console.log(body.city);
		return weather(body.city);
	}
).then(function(body) {
		console.log(body.main.temp);
	}
);