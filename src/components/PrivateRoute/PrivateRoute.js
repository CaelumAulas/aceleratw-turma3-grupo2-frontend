import React from "react";
import PropTypes from "prop-types";

import { Redirect, Route } from "react-router";

const PrivateRoute = ({ path, component: Component, ...rest }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("userToken"));

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              // eslint-disable-next-line react/prop-types
              state: { returnUrl: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
