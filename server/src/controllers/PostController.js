const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { title, description, category } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "user does not exist" });
    }

    const categoryArray = category
      .split(",")
      .map((category) => category.trim());

    const newPost = await Post.create({
      image: filename,
      title,
      description,
      category: categoryArray,
      user: user_id,
    });

    return res.json(newPost);
  },
  async index(req, res) {
    const posts = await Post.find();
    return res.json(posts);
  },
};
