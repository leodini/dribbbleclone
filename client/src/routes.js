import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PostPage } from "./components";

const Home = lazy(() => import("./components/Home/Home"));
const Signin = lazy(() => import("./components/Auth/Signin"));
const Signup = lazy(() => import("./components/Auth/Signup"));
const User = lazy(() => import("./components/User/User"));
// const PostPage = lazy(() => import("./components/PostPage/PostPage"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/user/:username" component={User} />
          <Route path="/post/:id" component={PostPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
