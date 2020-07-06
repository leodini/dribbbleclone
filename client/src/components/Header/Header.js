import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  HeaderContainer,
  SignInButton,
  SignUpButton,
  UserContainer,
  SignOutButton,
} from "./styledHeader";
import { Avatar } from "../Shared/Avatar";

const Header = () => {
  const { signout, user } = useAuth();

  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
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
          <div className="dropdown">
            <Avatar user={user} width={"32px"} height={"32px"} />
            <ul className="dropdown-content">
              <Link id="link" to={`/user/${user.user_id}`}>
                <li>Profile</li>
              </Link>
              <li className="rule"></li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li onClick={signout}>
                <span>Signout</span>
              </li>
            </ul>
          </div>
          <SignOutButton>
            <Link
              to="/upload"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              upload
            </Link>
          </SignOutButton>
        </UserContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
