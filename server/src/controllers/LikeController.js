const Like = require("../models/Like");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
  async create(req, res) {
    const { id } = req.params;

    const itsAPost = await Post.findById(id);
    const itsAComment = await Post.findById(id);

    const likeExistsAndItsAPost = await Like.exists({
      post: id,
      author: req.user.id,
    });

    const likeExistsAndItsAComment = await Comment.exists({
      author: req.user.id,
      comment: id,
    });

    if (itsAPost && !likeExistsAndItsAPost) {
      const newLike = await Like.create({
        post: id,
        author: req.user.id,
      });

      const post = await Post.findById(id);

      post.likes.push(newLike);

      await post.save();

      return res.json(post);
    }

    if (itsAComment && !likeExistsAndItsAComment) {
      const newLike = await Like.create({
        comment: id,
        author: req.user.id,
      });

      const comment = await Comment.findById(id);

      comment.likes.push(newLike);

      await comment.save();

      return res.json(comment);
    }

    return res.json({ message: "already liked" });
  },
  async index(req, res) {
    const { id } = req.params;
    const numLikes = await Like.find({ post: id }).countDocuments();
    return res.json(numLikes);
  },
};
