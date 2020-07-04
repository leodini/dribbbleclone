import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./context/authContext";
import { MessageProvider } from "./context/messageContext";
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <AuthProvider>
      <MessageProvider>
        <Routes />
        <GlobalStyles />
      </MessageProvider>
    </AuthProvider>
  );
}

export default App;
