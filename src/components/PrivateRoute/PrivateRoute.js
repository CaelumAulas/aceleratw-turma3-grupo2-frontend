/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import UserLoggedContext from "../../contexts/UserLoggedContext";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = useContext(UserLoggedContext);

  if (!isAuthenticated.token) return <Redirect to="/login" />;
  return <Route {...rest}>{children}</Route>;
}
