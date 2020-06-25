import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./context/authContext";
import { DataProvider } from "./context/dataContext";
import "./styles/Global";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Routes />
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
