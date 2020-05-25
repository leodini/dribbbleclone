const User = require("../models/User");
const Post = require("../models/Post");

module.exports = {
  async store(req, res) {
    const { username, password, bio, email, avatar_url } = req.body;

    const newUser = await User.create({
      username,
      password,
      bio,
      email,
      avatar_url,
    });

    return res.json(newUser);
  },
  async index(req, res) {
    const { userId } = req.params;
    const posts = await Post.find({ author: userId });
    return res.json(posts);
  },
};
