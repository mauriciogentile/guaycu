exports = function (app) {
	mongoose.connect(app.get('mongoUrl'), { db: { safe: true }});

	exports.post = require("./post");
};