const Comment = require("../models/Comment");

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
};
