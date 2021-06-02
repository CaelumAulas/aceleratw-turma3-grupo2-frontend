import React from "react";
import Login from "./screens/Login/Login";
import UserRegistration from "./screens/User/UserRegistration";
import BrandRegistration from "./screens/Brand/BrandRegistration";
import ListUser from "./screens/User/ListUser";

function App() {
  return (
    <>
      <Login />
      <UserRegistration />
      <BrandRegistration />
      <ListUser /> 
    </>
  );
}

export default App;
