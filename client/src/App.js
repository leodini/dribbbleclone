import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./context/authContext";
import "./styles/Global";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
