import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Signin, Signup } from "./components";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
