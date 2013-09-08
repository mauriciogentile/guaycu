module.exports = (function() {

	var env = 'development';
	if(process.env.OPENSHIFT_NAMESPACE) {
		env = 'production';
	}

    switch(env) {
        case 'development':
            return {
				mongoUrl: "mongodb://localhost:27017/guaycu",
			  	port: 8080
			};
        case 'production':
            return {
				mongoUrl: "mongodb://" + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" + process.env.OPENSHIFT_MONGODB_DB_HOST + ":" + process.env.OPENSHIFT_MONGODB_DB_PORT,
			  	port: process.env.OPENSHIFT_NODEJS_PORT
			};
        default:
            throw new Error("Configuration '" + process.env.NODE_ENV + "'' is not  valid!");
    }
})();