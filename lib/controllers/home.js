var app = module.exports = function (app) {

    var repository = require("./../dbdata");
    
    app.get('/', function (req, res) {
        repository.post.all(function(err, posts) {
            if(err) throw err;
            console.log(posts);
            res.render("home", { posts: posts });
        });
    });
};