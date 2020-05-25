const Comment = require("../models/Comment");
const Post = require("../models/Post");

module.exports = {
  async create(req, res) {
    const { content } = req.body;
    const { user_id } = req.headers;

    const newComment = await Comment.create({
      content,
      author: user_id,
    });

    return res.json(newComment);
  },
  async index(req, res) {
    const { postId } = req.query;

    const comments = await Comment.find({ postId });

    return res.json(comments);
  },
};
