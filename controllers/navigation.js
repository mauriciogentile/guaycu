exports.about = function(req, res, next) {
	res.render("about");
};

exports.work = function(req, res, next) {
	res.render("work");
};

exports.services = function(req, res, next) {
	res.render("services");
};

exports.home = function(req, res, next) {
	res.render("main");
};