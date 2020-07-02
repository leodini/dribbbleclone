import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f6f6f6;
  align-items: center;
  h2 {
    font-family: Vibur, sans-serif;
    margin-left: 12px;
  }
`;

export const SignInButton = styled.button`
  cursor: pointer;
  padding: 10px 16px;
  margin: 8px;
  background: transparent;
  color: #6e6d7a;
  height: 40px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  border-radius: 8px;
`;

export const SignUpButton = styled.button`
  cursor: pointer;
  padding: 10px 16px;
  /* margin: 8px; */
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  background: #6c63ff;
  border: none;
  color: #fff;
  width: 100px;
  font-family: Roboto, sans-serif;
  border-radius: 8px;
  :hover {
    background-color: #63a9ff;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  margin-right: 12px;
  align-items: center;

  p {
    font-family: Roboto;
    font-size: 18px;
    margin: 0 10px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    align-items: center;
    right: 0px;
  }

  .dropdown-content li {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    /* align-content: center; */
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;

export const SignOutButton = styled.button`
  cursor: pointer;
  padding: 10px 16px;
  /* margin: 8px; */
  margin-left: 10px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  background: #6c63ff;
  border: none;
  color: #fff;
  width: 100px;
  font-family: Roboto, sans-serif;
  border-radius: 8px;
  :hover {
    background-color: #63a9ff;
  }
`;
