import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkAuth from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest, "res");
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateRoute;
