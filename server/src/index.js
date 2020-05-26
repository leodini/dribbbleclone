require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const routes = require("./routes");
const initializePassport = require("./config/passport");

initializePassport(passport);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log(`db connected`)
);

const PORT = process.env.PORT || 3131;

app.use(routes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
