import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
`;

export const Header = styled.div`
  padding: 64px 64px 30px;
  margin-bottom: 50px;
`;

export const ImageSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) => props.background};
  width: 28%;
`;

export const MainText = styled.h1`
  color: ${(props) => props.color};
  font-size: 28px;
  margin-bottom: 22px;
  font-family: Vibur, sans-serif;
`;

export const Text = styled.p`
  color: ${(props) => props.color};
  font-size: 34px;
  padding-right: 30px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
`;

export const Image = styled.img`
  width: 100%;
`;

export const FormSection = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 30%;
  margin: auto;
  display: flex;
  margin-top: 22%;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #0d0c22;
  font-size: 16px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background: #f3f3f4;
  border-radius: 8px;
  border: none;
  padding: 6px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  height: 35px;
  :focus {
    border: 2px solid #f1cdd7;
    background: #fff;
  }
  :hover {
    border: 2px solid #f1cdd7;
    background: #fff;
  }
`;

export const Button = styled.button`
  padding: 15px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  font-family: Roboto, sans-serif;
  cursor: pointer;
  border-radius: 8px;
  width: 160px;
  background-color: #6c63ff;
  color: #fff;
  margin-top: 22px;
  transition: all 0.2s;
  :hover {
    background-color: #63a9ff;
  }
`;

export const SigninText = styled.h1`
  color: #0d0c22;
  font-size: 22px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  margin-bottom: 22px;
`;

export const AuthNav = styled.div`
  width: 100%;
  /* align-items: flex-end; */
`;

export const AuthNavText = styled.p`
  text-align: right;
  margin: 8px;
  font-family: Roboto, sans-serif;
`;

export const Error = styled.span`
  color: red;
  font-family: Roboto;
  margin-bottom: 3px;
`;
