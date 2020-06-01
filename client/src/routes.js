import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, SignIn, SignUp } from "./components";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
