import React from "react";
import Routes from "./routes";
import UserState from "./context/userContext";

function App() {
  return (
    <UserState>
      <Routes />
    </UserState>
  );
}

export default App;
