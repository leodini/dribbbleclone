import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f6f6f6;
  align-items: center;
`;

export const SignInButton = styled.button`
  cursor: pointer;
  padding: 10px 16px;
  margin: 8px;
  background: transparent;
  color: #6e6d7a;
  height: 40px;
  border: none;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
`;

export const SignUpButton = styled.button`
  cursor: pointer;
  padding: 10px 16px;
  margin: 8px;
  height: 40px;
  font-weight: 500;
  background: #ea4c89;
  border: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
`;
