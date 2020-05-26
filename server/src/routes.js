const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");
const CommentController = require("./controllers/CommentController");
const LikeController = require("./controllers/LikeController");

routes.post("/user", UserController.store);
routes.get("/user/:userId", UserController.index);

routes.post("/like/:projectId", LikeController.create);
routes.get("/like/count/:projectId", LikeController.index);

routes.post("/comment/:projectId", CommentController.create);
routes.get("/comment/:projectId", CommentController.index);

routes.get("/posts", PostController.index);
routes.post(
  "/posts",
  multer(uploadConfig).single("file"),
  PostController.store
);
routes.delete("/posts/:id", PostController.remove);

module.exports = routes;
