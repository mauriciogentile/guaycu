var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
	title: { type: String },
	abstract:  { type: String },
	body: { type: String },
	author: { type: String },
	publishedAt: { type: Date },
	publishedBy: { type: String },
	createdAt: { type: Date, default: Date.now },
	createdBy: { type: String },
	updatedAt: { type: Date },
	updatedBy: { type: String }
});

//index
PostSchema.index({ title:1 });

//Define Schema toObject options
PostSchema.set('toObject', { getters: true });
PostSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Post', PostSchema);