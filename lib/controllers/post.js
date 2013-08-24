var app = module.exports = function (app) {

  var repository = require("./../dbdata");

  app.post('/admin/post/create', restrict, function (req, res) {

    var post = {
      title: req.body.title,
      abstract: req.body.abstract,
      author: req.body.author,
      body: req.body.body,
      imageUrl: req.body.imageUrl,
      createdBy: "Mauri"
    };

    repository.post.create(post, function(err, post) {
      if (err) throw err;
      res.redirect('/admin/post/');
    });
  });

  app.post('/admin/post/edit', restrict, function (req, res) {

    var post = {
      id: req.body.id,
      title: req.body.title,
      abstract: req.body.abstract,
      author: req.body.author,
      imageUrl: req.body.imageUrl,
      body: req.body.body,
      updatedBy: "Mauri",
      updatedAt: new Date()
    };

    repository.post.update(post, function(err, post) {
      if (err) throw err;
      res.redirect('/admin/post/');
    });
  });

  app.get('/admin/post/create', restrict, function (req, res) {
    res.render("admin/post/create");
  });

  app.get('/admin/post/edit/:id', restrict, function (req, res) {
    repository.post.get(req.params.id, function(err, post) {
      if (err) throw err;
      console.log(post.body);
      res.render("admin/post/edit", post);
    });
  });

  app.get('/admin/post/', restrict, function (req, res) {
    repository.post.all(function(err, posts) {
      if (err) throw err;
      res.render("admin/post/index", { posts: posts });
    });
  });

  app.get('/admin/post/delete/:id', restrict, function (req, res) {
    repository.post.delete(req.params.id, function(err) {
      if (err) throw err;
      res.redirect('/admin/post/');
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