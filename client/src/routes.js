import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./components/Home/Home"));
const Signin = lazy(() => import("./components/Auth/Signin"));
const Signup = lazy(() => import("./components/Auth/Signup"));
const User = lazy(() => import("./components/User/User"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/:username" component={User} />
          <Route path="/shot/:id" component={} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
