var app = module.exports = function (app) {

  var repository = require("./../dbdata");

  app.post('/admin/post/create', restrict, function (req, res) {

    var post = {
      title: req.body.title,
      abstract: req.body.abstract,
      author: req.body.author,
      body: req.body.body,
      createdBy: "Mauri"
    };

    repository.post.create(post, function(err, post) {
      if (err) throw err;
      res.send(200);
    });
  });

  app.get('/admin/post/create', restrict, function (req, res) {
    res.render("admin/post/create");
  });


  app.get('/admin/post/', restrict, function (req, res) {
    repository.post.all(function(err, posts) {
      if (err) throw err;
      res.render("admin/post/index", { posts: posts });
    });
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