var app = module.exports = function (app) {

  var repository = require("./../dbdata");

  app.get('/', function (req, res) {
    res.render("home");
  });
};