import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./context/authContext";
import { MessageProvider } from "./context/messageContext";
import Message from "./components/Message/Message";
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <AuthProvider>
      <MessageProvider>
        <Message />
        <Routes />
        <GlobalStyles />
      </MessageProvider>
    </AuthProvider>
  );
}

export default App;
