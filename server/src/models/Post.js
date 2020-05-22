const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: {
      type: String,
      required: true,
    },
    category: [String],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
