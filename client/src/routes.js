import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Home, Signin, Signup, User } from "./components";

const { Home, Signin, Signup, User } = lazy(() => import("./components"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/:username" component={User} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
