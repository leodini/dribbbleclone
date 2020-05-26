const Comment = require("../models/Comment");
const Post = require("../models/Post");

module.exports = {
  async create(req, res) {
    const { content } = req.body;
    const { projectId } = req.params;
    const { user_id } = req.headers;

    const newComment = await Comment.create({
      content,
      project: projectId,
      author: user_id,
    });

    const post = await Post.findById(projectId);

    post.comments.push(newComment._id);

    await post.save();

    return res.json(newComment);
  },
  async index(req, res) {
    const { projectId } = req.params;

    // const comments = await Comment.find({ project: projectId });

    const comments = await Comment.find({ project: projectId })
      .populate("author")
      .select("project")
      .exec();

    return res.json(comments);
  },
};
