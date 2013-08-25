var app = module.exports = function (app) {

    var repository = require("./../dbdata");

    app.post('/page/:id', function (req, res) {
        repository.post.get(req.params.id, function(err, post) {
            if (err) throw err;
            console.log(post.body);
            res.render("admin/post/edit", post);
        });
    });
};