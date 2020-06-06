import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
