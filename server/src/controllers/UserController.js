const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async signUp(req, res) {
    const { username, password, bio, email, avatar_url } = req.value.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    if ((await User.findOne({ username })) || (await User.findOne({ email })))
      return res.status(403).json({ message: "user already exists" });

    const newUser = await User.create({
      username,
      password: encryptedPassword,
      bio,
      email,
      avatar_url,
    });

    return res.json(newUser);
  },
  async signIn(req, res) {
    //todo generate a token
    console.log(req);
  },
  async index(req, res) {
    const { userId } = req.params;
    const user = await User.findById(userId)
      .populate("posts")
      .populate("comments")
      .execPopulate();
    return res.json(user);
  },
};
