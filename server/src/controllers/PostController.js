const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

module.exports = {
  async store(req, res) {
    const { title, description, category } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(400).json({ error: "user does not exist" });
    }

    const categoryArray = category
      .split(",")
      .map((category) => category.trim());

    const newPost = await Post.create({
      image: req.file.filename,
      title,
      description,
      category: categoryArray,
      author: user_id,
    });

    user.posts.push(newPost._id);

    await user.save();

    return res.json(newPost);
  },
  async index(req, res) {
    const posts = await Post.find().populate("author comments").exec();
    return res.json(posts);
  },
  async remove(req, res) {
    const user = await User.findById(req.user.id);

    if (user) {
      const post = await Post.findById(req.params.id);
      await post.remove();
      return res.send();
    }

    return res.json({ message: "user not found" });
  },
};
