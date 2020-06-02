import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, SignInButton, SignUpButton } from "./styledHeader";

const Header = () => {
  return (
    <HeaderContainer>
      <h2>dribbbleo</h2>
      <div className="btn-container" style={{ marginRight: "10px" }}>
        <Link style={{ textDecoration: "none" }} to="/signin">
          <SignInButton>Sign in</SignInButton>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/signup">
          <SignUpButton>Sign up</SignUpButton>
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
