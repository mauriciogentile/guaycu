var express = require("express");
var jade = require("jade");
var config = require('./config');
var models = require('./lib/models');
var controllers = require("./lib/controllers");

var app = express();

console.log("configuring app...");

config(app);

console.log("configuring models...");

models(app);

console.log("configuring controllers...");

controllers(app);

console.log("starting app on port " + app.get('port') + "...");

app.listen(app.get('port'), app.get('ip'));