var app = module.exports = function (app) {

    var repository = require("./../dbdata");

    app.get('/post/:id', function (req, res) {
        repository.post.get(req.params.id, function(err, post) {
            if (err) throw err;
            console.log(post);
            res.render("post", { post: post });
        });
    });
};