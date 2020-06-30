import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./context/authContext";
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
  );
}

export default App;
