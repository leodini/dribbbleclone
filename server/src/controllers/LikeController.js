const Like = require("../models/Like");
const Post = require("../models/Post");

module.exports = {
  async create(req, res) {
    const { projectId } = req.params;

    const likeExists = await Like.exists({
      post: projectId,
      author: req.user.id,
    });

    if (!likeExists) {
      const newLike = await Like.create({
        post: projectId,
        author: req.user.id,
      });

      const post = await Post.findById(projectId);

      post.likes.push(newLike);

      await post.save();

      return res.json(post);
    }

    return res.json({ message: "post already liked" });
  },
  async index(req, res) {
    const { projectId } = req.params;
    const numLikes = await Like.find({ post: projectId }).countDocuments();
    return res.json(numLikes);
  },
};
