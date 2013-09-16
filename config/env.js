module.exports = (function() {
    return {
		mongoUrl: process.env.MONGOHQ_URL || "mongodb://localhost:27017/guaycu",
	  	port: process.env.PORT || 8080,
	  	ip: "127.0.0.1"
	};
})();