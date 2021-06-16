/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import UserLogged from "../../contexts/UserLogged";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = useContext(UserLogged);

  console.log(isAuthenticated);
  if (!isAuthenticated.token) return <Redirect to="/login" />;
  return <Route {...rest}>{children}</Route>;
}
