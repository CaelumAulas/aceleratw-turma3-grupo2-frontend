import React, { useState } from "react";
import Login from "./screens/Login/Login";
import UserRegistration from "./screens/User/UserRegistration";
import BrandRegistration from "./screens/Brand/BrandRegistration";
import ListUser from "./screens/User/ListUser";
import ListBrand from "./screens/Brand/ListBrand";

function App() {
  const [active] = useState(3);

  const screens = [
    <Login key="login" />,
    <UserRegistration key="userRegistration" />,
    <BrandRegistration key="brandRegistration" />,
    <ListUser key="listUser" />,
    <ListBrand key="listBrand" />

  ];

  return <>{screens[active]}</>;
}

export default App;
