import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import {
  HeaderContainer,
  SignInButton,
  SignUpButton,
  UserContainer,
} from "./styledHeader";

const Header = () => {
  const { username, signout } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <h2>dribbbleo</h2>
      {!username ? (
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
          <p>hello, {username}</p>
          <SignUpButton onClick={signout}>signout</SignUpButton>
        </UserContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
