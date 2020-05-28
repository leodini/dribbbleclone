const multer = require("multer");
const uploadConfig = require("./config/upload");
const routes = require("express-promise-router")();
const passport = require("passport");
const passportConf = require("./config/passport");

const { validateBody, schemas } = require("./middlewares/routeHelpers");

const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");
const CommentController = require("./controllers/CommentController");
const LikeController = require("./controllers/LikeController");

const passportLocal = passport.authenticate("local", { session: false });
const passportJwt = passport.authenticate("jwt", { session: false });

//user routes
routes.post("/signup", validateBody(schemas.authSchema), UserController.signUp);
routes.post("/signin", passportLocal, UserController.signIn);
routes.get("/user/:userId", UserController.index);

//like routes
routes.post("/like/:projectId", passportJwt, LikeController.create);
routes.get("/like/count/:projectId", LikeController.index);

//comment routes
routes.post("/comment/:projectId", passportJwt, CommentController.create);
routes.get("/comment/:projectId", CommentController.index);

//post routes
routes.get("/posts", PostController.index);
routes.post(
  "/posts",
  passportJwt,
  validateBody(schemas.postSchema),
  multer(uploadConfig).single("file"),
  PostController.store
);
routes.delete("/posts/:id", passportJwt, PostController.remove);

module.exports = routes;
