import React, { useState } from "react";
import Login from "./screens/Login/Login";
import UserRegistration from "./screens/User/UserRegistration";
import BrandRegistration from "./screens/Brand/BrandRegistration";
import ListUser from "./screens/User/ListUser";
import ListBrand from "./screens/Brand/ListBrand";
import UserForgotPassword from "./screens/User/UserForgotPassword";

function App() {
  const [active] = useState(0);

  const screens = [
    <Login key="login" />,
    <UserRegistration key="userRegistration" />,
    <BrandRegistration key="brandRegistration" />,
    <UserForgotPassword key="userForgotpassword" />,
    <ListUser key="listUser" />,
    <ListBrand key="listBrand" />,
  ];

  return <>{screens[active]}</>;
}

export default App;
