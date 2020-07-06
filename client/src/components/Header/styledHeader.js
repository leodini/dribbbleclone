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
    align-content: center;
  }

  .dropdown-content {
    box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
    background-clip: padding-box;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
    padding: 30px 0;
    position: absolute;
    right: -105px;
    top: calc(50px - 10px);
    width: 245px;
    z-index: 1000;
  }

  .dropdown-content::before{
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: -6px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fff;
}
  }

  .dropdown-content li {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    color: #9898a1;
  }

  .dropdown-content li a {
    color: inherit;
  }

  .dropdown-content li.rule{
    border-bottom: 1px solid #dbdbde;
    margin: 13px 32px;
    width: auto;  
    cursor: default;
    height: 1px;
  }


  .dropdown-content li:hover a{
    color: #0d0c22;
    background-color: rgba(13,12,34,0.02);
    border-radius: 0;
    text-decoration: none;
  }

  .dropdown-content li:hover span{
    color: #0d0c22;
    background-color: rgba(13,12,34,0.02);
    border-radius: 0;
    text-decoration: none;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }


`;

export const SignOutButton = styled.button`
  cursor: pointer;
  padding: 10px 16px;
  /* margin: 8px; */
  margin-left: 10px;
  margin-right: 6px;
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
