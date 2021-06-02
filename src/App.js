import React, { useState } from "react";
import Login from "./screens/Login/Login";

function App() {
  const [active] = useState(0);

  const screens = [<Login key="login" />];

  return <>{screens[active]}</>;
}

export default App;
