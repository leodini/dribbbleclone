import React from "react";
import { HeaderContainer, SignInButton, SignUpButton } from "./styledHeader";

const Header = () => {
  return (
    <HeaderContainer>
      <h2>dribbbleo</h2>
      <div className="btn-container">
        <SignInButton>Sign in</SignInButton>
        <SignUpButton>Sign up</SignUpButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;
