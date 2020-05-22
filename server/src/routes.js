const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");
const CommentController = require("./controllers/CommentController");
const LikeController = require("./controllers/LikeController");

const upload = multer(uploadConfig);

routes.post("/user", UserController.store);
routes.get("/user", UserController.index);

routes.post("/:projectId", LikeController.create);

routes.post("/comment", CommentController.create);

routes.get("/post", PostController.index);
routes.post("/post", upload.single("image"), PostController.store);

module.exports = routes;
