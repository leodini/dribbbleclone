const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const authenticateUser = async (username, password, done) => {
  const user = User.findOne({ username: username });
  console.log(user);
  if (!user) {
    return done(null, false, { message: "no user found" });
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      return done(null, user);
    } else {
      return done(null, false, { message: "password incorrect" });
    }
  } catch (err) {
    return done(err);
  }
};

passport.use(
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    authenticateUser
  )
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  let user = await User.findById(id);
  return done(null, user);
});

// module.exports = initialize;
