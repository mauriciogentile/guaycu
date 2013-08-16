var express = require("express");
var jade = require("jade");
var config = require('./config');
var models = require('./lib/models');
//var routes = require('./config/routes.js');
var controllers = require("./lib/controllers");

var app = express();

config(app);
models(app);

controllers(app);

app.listen(8080);