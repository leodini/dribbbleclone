import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Signin, Signup, User } from "./components";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/user/:username" component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
