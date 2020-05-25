const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    content: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
