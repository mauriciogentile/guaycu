var mongoose = require('mongoose');
var Post = mongoose.model('Post');

exports.all = function all(callback) {

  Post
    .find()
    .sort('-publishedAt')
    .exec(function (err, posts) {
      if (err) {
        return callback(err);
      };

      callback(null, posts);
    });
};

exports.get = function get(id, callback) {
  Post
    .findById(id)
    .exec(function (err, post) {
      if (err) {
        return callback(err);
      };
      callback(null, post);
    });
};

exports.create = function get(post, callback) {

  var newPost = new Post();
  newPost.title = post.title;
  newPost.abstract = post.abstract;
  newPost.body = post.body;
  newPost.author = post.author;
  newPost.createdAt = Date.now;
  newPost.createdBy = post.createdBy;

  newPost.save(function(err) {
    return callback(err, newPost);
  });
};

exports.update = function get(post, callback) {

  if(!post._id) {
    return callback(new Error("No _id specified"));
  }

  var newPost = new Post();
  newPost._id = post.id;
  newPost.title = post.title;
  newPost.abstract = post.abstract;
  newPost.body = post.body;
  newPost.author = post.author;
  newPost.publishedAt = post.publishedAt;
  newPost.publishedBy = post.publishedBy;
  newPost.updatedAt = Date.now;
  newPost.updatedBy = post.updatedBy;

  newPost.save(function(err) {
    return callback(err, newPost);
  });
};