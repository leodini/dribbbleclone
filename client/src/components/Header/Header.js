import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import WrapWithUser from "../../hocs/wrapWithUser";
import {
  HeaderContainer,
  SignInButton,
  SignUpButton,
  UserContainer,
} from "./styledHeader";

const Header = ({ user }) => {
  const { signout } = useAuth();

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
          {/* <SignInButton>Signout</SignInButton> */}
          <p>hello, {user.username}</p>
          <SignUpButton onClick={signout}>signout</SignUpButton>
        </UserContainer>
      )}
    </HeaderContainer>
  );
};

export default WrapWithUser(Header);
