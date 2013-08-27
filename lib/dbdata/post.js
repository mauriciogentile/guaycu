var mongoose = require('mongoose');
var Post = mongoose.model('Post');

exports.all = function(callback) {

    Post
        .find()
        .sort({ publishedAt: -1})
        .exec(function (err, posts) {
            if (err) {
                return callback(err);
            };

            callback(null, posts);
        });
};

exports.last = function(last, callback) {

    Post
        .find()
        .sort({ publishedAt: -1})
        .limit(last)
        .exec(function (err, posts) {
            if (err) {
                return callback(err);
            };

            callback(null, posts);
        });
};

exports.get = function(id, callback) {
    Post
        .findById(id)
        .exec(function (err, post) {
            if (err) {
                return callback(err);
            };
            callback(null, post);
        });
};

exports.create = function(post, callback) {

    var newPost = new Post();
    newPost.title = post.title;
    newPost.abstract = post.abstract;
    newPost.body = post.body;
    newPost.isPublic = false;
    newPost.imageUrl = post.imageUrl;
    newPost.author = post.author;
    newPost.createdAt = new Date();
    newPost.createdBy = post.createdBy;

    newPost.save(function(err) {
        return callback(err, newPost);
    });
};

exports.update = function(postData, callback) {

    if(!postData.id) {
        return callback(new Error("No id specified"));
    }

    Post
        .findById(postData.id)
        .exec(function (err, post) {
            if (err) {
                return callback(err);
            };

            post.title = postData.title;
            post.abstract = postData.abstract;
            post.body = postData.body;
            post.author = postData.author;
            post.imageUrl = postData.imageUrl;
            post.isPublic = postData.isPublic;
            post.publishedAt = postData.publishedAt;
            post.publishedBy = postData.publishedBy;
            post.updatedAt = new Date();
            post.updatedBy = postData.updatedBy;

            post.save(function(err) {
                return callback(err, post);
            });
        });
};

exports.delete = function(id, callback) {
    if(!id) {
        return callback(new Error("No id specified"));
    }

    Post.remove({ _id: id }, function(err) {
        return callback(err);
    });
};