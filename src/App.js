import React, { useState } from "react";
import Login from "./screens/Login/Login";
import Dashboard from "./screens/Dashboard/Dashboard";

function App() {
  const [active] = useState(0);

  const screens = [<Login key="login" />, <Dashboard key="dashboard" />];

  return <>{screens[active]}</>;
}

export default App;
