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
    const { username } = req.query;
    console.log(username);
    const users = User.find({ username: username });
    return res.json(users);
  },
};
