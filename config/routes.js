var navigation = require("../controllers/navigation");

module.exports = function(app) {
    app.get("/", navigation.home);
    app.get("/about", navigation.about);
    app.get("/work", navigation.work);
    app.get("/services", navigation.services);
    app.get("/blog", navigation.home);
    app.get("/contact", navigation.home);
};