module.exports = function(app) {
	require("./home")(app);
	require("./admin/post")(app);
	require("./post")(app);
};