import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pageTitle from "../../utils/title";
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
  Error,
} from "./StyledAuth";
import api from "../../api";
import JWT from "../../helpers/jwt";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    show: false,
    msg: "username or email already in use",
  });

  useEffect(() => {
    pageTitle("Sign In | dribbbleo");
  }, []);

  const signin = async (e) => {
    e.preventDefault();

    const form = { username, password };

    try {
      const {
        data: { token },
      } = await api.post("/signin", form);

      JWT.storeJwt(token);
    } catch (err) {
      setError({ ...error, show: true });
    }
  };

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
      <FormSection onSubmit={signin}>
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
          {error.show ? <Error>{error.msg}</Error> : null}
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
          <Button type="submit">Sign in</Button>
        </Form>
      </FormSection>
    </Page>
  );
};

export default Signin;
