var fs = require('fs');
var http = require('http');
var express = require('express');
var httpProxy = require('http-proxy');

// CREATE HTTP SERVER AND PROXY
        
var app = express();
var server = http.createServer(app);
var proxy = new httpProxy.RoutingProxy();

// LOAD CONFIGURATION

var oneDay = 86400000;

app.configure(function() {
    app.set('port', process.env.PORT || 3000, '127.0.0.1');
    app.use('/subnational/app/libs',         express.static(__dirname + '/subnational/app/libs', { maxAge: 28*oneDay }));
    app.use('/subnational/app',              express.static(__dirname + '/subnational/app'));
});

// SET ROUTES

app.get   ('/subnational/app/*', function(req, res) { res.send('404', 404); } );

app.get   ('/api/*', function(req, res) { proxy.web(req, res, { target: 'https://api.cbd.int', secure: false } ); } );
app.put   ('/api/*', function(req, res) { proxy.web(req, res, { target: 'https://api.cbd.int', secure: false } ); } );
app.post  ('/api/*', function(req, res) { proxy.web(req, res, { target: 'https://api.cbd.int', secure: false } ); } );
app.delete('/api/*', function(req, res) { proxy.web(req, res, { target: 'https://api.cbd.int', secure: false } ); } );


// SET TEMPLATE

app.get('/subnational*', function(req, res) {
	fs.readFile(__dirname + '/subnational/app/template.html', 'utf8', function (error, text) { 
		res.send(text); 
	});
});

// START HTTP SERVER

console.log('Server listening on port ' + app.get('port') + '.');
server.listen(app.get('port'));