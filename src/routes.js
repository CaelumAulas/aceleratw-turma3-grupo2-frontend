import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from 'screens/Dashboard/Dashboard';
import PageNotFound from 'screens/NotFound/NotFound';
import Login from 'screens/Login/Login';
import UserRegistration from 'screens/User/UserRegistration';
import BrandRegistration from 'screens/Brand/BrandRegistration';
import UserForgotPassword from 'screens/User/UserForgotPassword';
import ListUsers from 'screens/User/ListUsers';
import ListBrand from 'screens/Brand/ListBrand';
import VehicleRegistration from 'screens/Vehicle/VehicleRegistration';
import ListVehicle from 'screens/Vehicle/ListVehicle';
import PageHeader from 'components/PageHeader/PageHeader';
import ConfirmProvider from 'components/Confirmation/ConfirmProvider';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

export default function Routes() {
  return (
    <BrowserRouter>
      <ConfirmProvider>
        <PageHeader>
          <Switch>
            <Route exact path="/" component={ListVehicle} />
            <Route path="/login" component={Login} />
            <Route path="/recuperar-senha" component={UserForgotPassword} />
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute
              path="/usuarios/cadastro"
              component={UserRegistration}
            />
            <PrivateRoute
              path="/marcas/cadastro"
              component={BrandRegistration}
            />
            <PrivateRoute path="/veiculos/cadastro">
              <VehicleRegistration />
            </PrivateRoute>
            <PrivateRoute path="/usuarios" component={ListUsers} />
            <PrivateRoute path="/marcas" component={ListBrand} />
            <Route path="/veiculos" component={ListVehicle} />
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </PageHeader>
      </ConfirmProvider>
    </BrowserRouter>
  );
}
