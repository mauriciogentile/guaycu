var app = module.exports = function (app) {

  var repository = require("./../dbdata");

  app.post('/admin/post/create', restrict, function (req, res) {

    var post = {
      title: req.title,
      author: req.author
    };

    repository.post.create(post, function(err, post) {
      if (err) return _handleError(err, req, res);
      res.json(post);
    });
  });

  app.get('/admin/post/create', restrict, function (req, res) {
    res.render("admin/post/create");
  });
};

function restrict(req, res, next){
  //if(req.isAuthenticated()) {
  if(true) {
    next();
  } else {
    // we should actually redirect
    // to a login page...
    res.format({
      html: function () {
        res.redirect('/auth/facebook');
      },
      json: function() {
        res.json({
          error: "Can't vote without login in.",
          action: {
            redirect: '/auth/facebook'
          }
        })
      }
    });
  }
};