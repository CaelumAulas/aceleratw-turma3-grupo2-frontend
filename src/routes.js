import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "screens/Dashboard/Dashboard";
import PageNotFound from "screens/404/404";
import Login from "screens/Login/Login";
import UserRegistration from "screens/User/UserRegistration";
import BrandRegistration from "screens/Brand/BrandRegistration";
import UserForgotPassword from "screens/User/UserForgotPassword";
import ListUsers from "screens/User/ListUser";
import ListBrand from "screens/Brand/ListBrand";
import VehicleRegistration from "screens/Vehicle/VehicleRegistration";
import ListVehicle from "screens/Vehicle/ListVehicle";
import PageHeader from "components/PageHeader/PageHeader";

export default function Routes() {
  return (
    <BrowserRouter>
      <PageHeader>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/inicio" component={Dashboard} />
          <Route path="usuarios/cadastro" component={UserRegistration} />
          <Route path="/usuarios" component={ListUsers} />
          <Route path="/marcas/cadastro" component={BrandRegistration} />
          <Route path="/marcas" component={ListBrand} />
          <Route path="/veiculos/cadastro" component={VehicleRegistration} />
          <Route path="/veiculos" component={ListVehicle} />
          <Route path="/recuperar-senha" component={UserForgotPassword} />
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </PageHeader>
    </BrowserRouter>
  );
}
