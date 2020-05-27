const multer = require("multer");
const uploadConfig = require("./config/upload");
const routes = require("express-promise-router")();
const checkAuthentication = require("./middlewares/checkAuthentication");
const { validateBody, schemas } = require("./helpers/routeHelpers");

const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");
const CommentController = require("./controllers/CommentController");
const LikeController = require("./controllers/LikeController");

//user routes
routes.post("/signup", validateBody(schemas.authSchema), UserController.signUp);
routes.post("/signin", UserController.signIn);
routes.get("/user/:userId", UserController.index);

//like routes
routes.post("/like/:projectId", checkAuthentication, LikeController.create);
routes.get("/like/count/:projectId", LikeController.index);

//comment routes
routes.post(
  "/comment/:projectId",
  checkAuthentication,
  CommentController.create
);
routes.get("/comment/:projectId", CommentController.index);

//post routes
routes.get("/posts", PostController.index);
routes.post(
  "/posts",
  checkAuthentication,
  multer(uploadConfig).single("file"),
  PostController.store
);
routes.delete("/posts/:id", checkAuthentication, PostController.remove);

module.exports = routes;
