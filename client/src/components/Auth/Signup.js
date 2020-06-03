import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pageTitle from "../../utils/title";
import signup from "../../assets/signup.png";
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
  AuthNavText,
} from "./StyledAuth";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    pageTitle("Sign Up | dribbbleo");
  }, []);

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
        <Image src={signup} alt="dribbbleo" />
      </ImageSection>
      <FormSection>
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
          <Button>Create Account</Button>
        </Form>
      </FormSection>
    </Page>
  );
};

export default Signup;
