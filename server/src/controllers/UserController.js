const User = require("../models/User");

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
    const users = await User.find();
    return res.json(users);
  },
};
