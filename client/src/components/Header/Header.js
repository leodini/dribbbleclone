import React from "react";
import { HeaderContainer, SignInButton, SignUpButton } from "./styledHeader";

const Header = () => {
  return (
    <HeaderContainer>
      <h2>dribbbleo</h2>
      <div className="btn-container" style={{ marginRight: "10px" }}>
        <SignInButton>Sign in</SignInButton>
        <SignUpButton>Sign up</SignUpButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;
