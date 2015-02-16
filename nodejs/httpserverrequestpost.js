// httpserverrequestpost.js

var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res){
	var post = '';

	req.on('data', function(chunk) {
		post += chunk;
		console.log('chunk is ' + chunk);
	});

	req.on('end', function(){
		post = querystring.parse(post);
		console.dir('post is ' + post);
		res.end(util.inspect(post));
		console.log('util.inspect is ' + util.inspect(post));
	});

}).listen(3000);

console.log('HTTP server is listening at port 3000.');
