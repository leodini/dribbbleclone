const mongoose = require("mongoose");
const deepPopulate = require("mongoose-deep-populate")(mongoose);

const PostSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    category: [String],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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

PostSchema.virtual("image_url").get(function () {
  return `localhost:3333/files/${this.image}`;
});

PostSchema.plugin(deepPopulate);

module.exports = mongoose.model("Post", PostSchema);
