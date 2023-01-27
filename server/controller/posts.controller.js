const mongoose = require("mongoose");

const PostMessages = require("../models/postsMessage");

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessages.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new PostMessages(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({
      success: false,
      message: "No post with that id",
    });
  }
  const updatedPost = await PostMessages.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json({
    success: true,
    message: "Post Successfully update",
    updatedPost,
  });
};

module.exports = { getPosts, createPost, updatePost };
