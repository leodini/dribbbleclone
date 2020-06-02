import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import chill from "../../assets/chill.jpg";
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
  AuthNav,
  AuthNavText,
  SigninText,
} from "./StyledAuth";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.document.title = "Sign In | dribbbleo";
  }, []);

  return (
    <Page>
      <ImageSection background={"#f1cdd7"}>
        <Header>
          <MainText color={"#865c6c"}>dribbbleo</MainText>
          <Text color={"#865c6c"}>
            Discover the world’s
            <br /> top Designers & <br />
            Creatives.
          </Text>
        </Header>
        <Image src={chill} alt="dribbbleo" />
      </ImageSection>
      <FormSection>
        <AuthNav>
          <AuthNavText>
            Not a member?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign up now
            </Link>
          </AuthNavText>
        </AuthNav>
        <Form>
          <SigninText>Sign in to Dribbbleo</SigninText>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Sign in</Button>
        </Form>
      </FormSection>
    </Page>
  );
};

export default Signin;
