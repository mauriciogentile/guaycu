var path = require("path");
var express = require("express");
var env = require("./env");

console.log(env);

var clientErrorHandler = function(err, req, res, next) {
	if (req.xhr) {
		res.send(500, { error: err });
	}
	else {
		next(err);
  	}
};

module.exports = function(app) {
    app.configure(function() {
    	var views = path.join(__dirname + "/../views");
    	var pub = path.join(__dirname + "/../public");
        app.use(express.logger());
        app.use(express.bodyParser());
        app.use(app.router);
        app.use(clientErrorHandler);
        console.log(env.mongoUrl);
        app.set('mongoUrl', env.mongoUrl);
        app.set('port', env.port);
        app.set('ip', env.ip);
        app.set('views', views);
        app.set('view engine', 'jade');
        app.use(express.static(pub));
        
        console.log("views in:" + views);
        console.log("public assets in: "+ pub);
    });

    //development configuration
    app.configure('development', function() {
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

    //production configuration
    app.configure('production', function() {
        app.use(express.errorHandler());
    });
};