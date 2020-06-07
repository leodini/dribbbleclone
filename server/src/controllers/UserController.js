const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

signToken = (user) => {
  return JWT.sign(
    {
      iss: "dribllleclone",
      sub: { username: user.username, user_id: user._id, avatar },
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 30),
    },
    process.env.TOKEN_SECRET
  );
};

module.exports = {
  async signUp(req, res) {
    const { username, password, bio, email, avatar } = req.value.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    if ((await User.findOne({ username })) || (await User.findOne({ email })))
      return res.status(403).json({ message: "user already exists" });

    const newUser = await User.create({
      username,
      password: encryptedPassword,
      bio,
      email,
      avatar,
    });

    const token = signToken(newUser);

    return res.json({ token });
  },
  async signIn(req, res) {
    const token = signToken(req.user);
    return res.json({ token });
  },
  async index(req, res) {
    const { userId } = req.params;
    const user = await User.findById(userId)
      .populate("posts")
      .populate("comments")
      .execPopulate();
    return res.json(user);
  },
  async updateUser(req, res) {
    const user = req.user;
    const { filename } = req.file;
    const { bio } = req.body;

    if (filename && bio) {
      const updatedUser = await User.findByIdAndUpdate(user._id, {
        avatar: filename,
        bio,
      });
      return res.json(updatedUser);
    }
  },
};
