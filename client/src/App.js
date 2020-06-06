import React, { useEffect, useContext } from "react";
import Routes from "./routes";
import { AuthProvider } from "./context/authContext";
import AuthContext from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
