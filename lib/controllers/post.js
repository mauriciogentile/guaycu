var repository = require(".dbdata");
var express = require('express');

var app = module.exports = express();

app.post('/admin/post/create', restrict, function (req, res) {

	var post = { 
		title: req.title,
		author: req.author
	};

	repository.post.create(post, function(err, citizens) {
		if (err) return _handleError(err, req, res);
		res.json(citizens);
	});
});

app.get('/admin/post/create', restrict, function (req, res) {

  var post = { 
    title: req.title,
    author: req.author
  };

  repository.post.create(post, function(err, citizens) {
    if (err) return _handleError(err, req, res);
    res.json(citizens);
  });
});

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