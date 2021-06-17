import React from "react";
import Routes from "routes";
import LoadingProvider from "contexts/LoadingContext";
import Loading from "components/Loading/Loading";

function App() {
  return (
    <LoadingProvider>
      <Routes />
      <Loading />
    </LoadingProvider>
  );
}

export default App;
