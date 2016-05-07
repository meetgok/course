var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.use(middleware.requireAuthentication);
app.use(middleware.logger);
	//middleware ilgili linke girmeden hemen önce
	// yapılmak istenenleri gireceğimiz yer.
app.use(express.static(__dirname + '/public'));



app.listen(PORT, function() {
	console.log('server started on port ' + PORT);
});