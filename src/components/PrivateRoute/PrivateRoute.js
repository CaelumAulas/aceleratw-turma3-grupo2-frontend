/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router';

export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = localStorage.getItem('Token');

  if (!isAuthenticated) return <Redirect to="/login" />;

  return <Route {...rest}>{children}</Route>;
}
