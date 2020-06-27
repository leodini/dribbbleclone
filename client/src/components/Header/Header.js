import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  HeaderContainer,
  SignInButton,
  SignUpButton,
  UserContainer,
} from "./styledHeader";
import default_user from "../../assets/default_user.png";
import { Avatar } from "../Shared/Avatar";

const Header = () => {
  const { signout, user } = useAuth();

  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>dribbbleo</h2>
      </Link>
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
          <Avatar user={user} />
          <SignUpButton onClick={signout}>signout</SignUpButton>
        </UserContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
