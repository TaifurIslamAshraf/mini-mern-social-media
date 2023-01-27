const mongoose = require("mongoose");

const postsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  selectedFile: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    required: true,
    default: 0,
  },
  cratedAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessages = mongoose.model("postMessage", postsSchema);
module.exports = PostMessages;
