import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pageTitle from "../../utils/title";
import signupImage from "../../assets/signup.png";
import {
  Page,
  ImageSection,
  MainText,
  Text,
  Image,
  FormSection,
  Header,
  Form,
  Label,
  Input,
  Button,
  SigninText,
  AuthNav,
  Error,
  AuthNavText,
} from "./StyledAuth";
import JWT from "../../helpers/jwt";
import api from "../../api";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    show: false,
    msg: "username or email already in use",
  });

  useEffect(() => {
    pageTitle("Sign Up | dribbbleo");
  }, []);

  const signup = async (e) => {
    e.preventDefault();
    const newUser = { username, password, email };
    try {
      const {
        data: { token },
      } = await api.post("/sinup", newUser);
      JWT.storeJwt(token);
    } catch (err) {
      setError({ ...error, show: true });
    }
  };

  return (
    <Page>
      <ImageSection background={"#f2d184"}>
        <Header>
          <MainText color={"#866118"}>dribbbleo</MainText>
          <Text color={"#866118"}>
            Discover the world’s
            <br /> top Designers & <br />
            Creatives.
          </Text>
        </Header>
        <Image src={signupImage} alt="dribbbleo" />
      </ImageSection>
      <FormSection onSubmit={signup}>
        <AuthNav>
          <AuthNavText>
            Already a member?{" "}
            <Link to="/signin" style={{ textDecoration: "none" }}>
              Sign In
            </Link>
          </AuthNavText>
        </AuthNav>
        <Form>
          <SigninText>Sign up to Dribbbleo</SigninText>
          {error.show ? <Error>{error.msg}</Error> : null}
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Create Account</Button>
        </Form>
      </FormSection>
    </Page>
  );
};

export default Signup;
