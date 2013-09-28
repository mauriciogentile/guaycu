var mongoose = require('mongoose');

module.exports = function (app) {
	var mongoUrl = app.get("mongoUrl");
	console.log("connecting to mongodb on " + mongoUrl + "...");
	//mongoose.connect(mongoUrl);
	console.log("connected to mongodb!");
	require('./post');	
};