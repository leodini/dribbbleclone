const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  response: String,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  date: Date.now,
});

module.exports = mongoose.model("Comment", CommentSchema);
