var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
	title: { type: String, required: true },
	abstract:  { type: String, required: true },
	body: { type: String, required: true },
	author: { type: String, required: true },
	publishedAt: { type: Date },
	publishedBy: { type: String },
	createdAt: { type: Date, default: Date.now, required: true },
	createdBy: { type: String, required: true },
	updatedAt: { type: Date },
	updatedBy: { type: String }
});

//index
PostSchema.index({ title:1 });

//Define Schema toObject options
PostSchema.set('toObject', { getters: true });
PostSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Post', PostSchema);