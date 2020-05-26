module.exports = ({ user }, res, next) => {
  user ? next() : res.status(404).json({ error: "you`re not authenticated" });
};
