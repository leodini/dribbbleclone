const Like = require("../models/Like");

module.exports = {
  async create(req, res) {
    const { projectId } = req.params;
    const { user_id } = req.headers;

    const likeExists = await Like.exists({
      post: projectId,
      author: user_id,
    });

    if (!likeExists) {
      const newLike = await Like.create({
        post: projectId,
        author: user_id,
      });

      return res.json(newLike);
    }

    return res.json({ message: "post already liked" });
  },
};
