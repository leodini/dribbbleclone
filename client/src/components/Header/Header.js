import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  HeaderContainer,
  SignInButton,
  SignUpButton,
  UserContainer,
} from "./styledHeader";

const Header = () => {
  const { signout, user } = useAuth();

  return (
    <HeaderContainer>
      <h2>dribbbleo</h2>
      {!user ? (
        <div className="btn-container" style={{ marginRight: "10px" }}>
          <Link style={{ textDecoration: "none" }} to="/signin">
            <SignInButton>Sign in</SignInButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <SignUpButton>Sign up</SignUpButton>
          </Link>
        </div>
      ) : (
        <UserContainer>
          <p>hello, {user.username}</p>
          <SignUpButton onClick={signout}>signout</SignUpButton>
        </UserContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
