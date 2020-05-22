const express = require("express");
const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");
const routes = express.Router();

routes.post("/user", UserController.store);
routes.get("/user", UserController.index);

routes.get("/post", PostController.index);
routes.post("/post", PostController.store);

module.exports = routes;
