import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { PostPage } from "./components";
import useAuth from "./hooks/useAuth";

const Home = lazy(() => import("./components/Home/Home"));
const Signin = lazy(() => import("./components/Auth/Signin"));
const Signup = lazy(() => import("./components/Auth/Signup"));
const User = lazy(() => import("./components/User/User"));
const Upload = lazy(() => import("./components/Upload/Upload"));

const PostPage = lazy(() => import("./components/PostPage/PostPage"));

export const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/signin",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

const Routes = () => {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/user/:id" component={User} />
          <Route path="/post/:id" component={PostPage} />
          <ProtectedRoute path="/upload" token={token} component={Upload} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
