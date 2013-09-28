var moment = require('moment');

var app = module.exports = function (app) {

    var repository = require("./../dbdata");
    
    app.get('/', function (req, res) {

        res.render("home");
        /*repository.post.last(4, function(err, last4) {
            if(err) throw err;

            last4.forEach(function(item) {
                console.log(item.publishedAt);
                item.publishedAt = item.publishedAt || new Date();
                item.publishedAtFormatted = moment(item.publishedAt).format("Do MMMM YYYY");
                console.log(moment(item.publishedAt).format("Do MMMM YYYY"));
            });

            repository.post.last(5, function(err, last5) {
                if(err) throw err;
                res.render("home", { posts: last4, lastPosts: last5 });
            });
        });*/
    });
};