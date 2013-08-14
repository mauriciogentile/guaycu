var express = require("express");
var jade = require("jade");
var environment = require('./config/environment.js');
//var routes = require('./config/routes.js');
var controllers = require("./lib/controllers");

var app = express();

environment(app);
//routes(app);

require("./lib/models");

controllers(app);

app.listen(8080);