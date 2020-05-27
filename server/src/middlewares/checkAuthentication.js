module.exports = (req, res, next) => {
  req.user
    ? next()
    : res.status(404).json({ error: "you`re not authenticated" });
};
