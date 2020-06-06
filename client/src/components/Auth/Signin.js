import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState({
    show: false,
    msg: "username or email already in use",
  });
  const [isLoading, setIsLoading] = useState(false);

  const context = useAuth();
  const history = useHistory();

  useEffect(() => {
    pageTitle("Sign In | dribbbleo");
  }, []);

  const signin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await context.signin(username, password);
    setIsLoading(false);
    history.push("/");
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
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLoading ? (
            <Button type="submit">loading...</Button>
          ) : (
            <Button type="submit">Sign in</Button>
          )}
        </Form>
      </FormSection>
    </Page>
  );
};

export default Signin;
