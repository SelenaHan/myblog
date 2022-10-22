const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required: true},
    post_content: {type: String, required: true},
    post_img: {type: String, required: true},
    postDate: {type: Date, default: Date.now},
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
