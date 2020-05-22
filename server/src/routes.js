const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");

const upload = multer(uploadConfig);

routes.post("/user", UserController.store);
routes.get("/user", UserController.index);

routes.get("/post", PostController.index);
routes.post("/post", upload.single("image"), PostController.store);

module.exports = routes;
