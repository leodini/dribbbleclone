import React, { useEffect, useState } from "react";
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
      <ImageSection>
        <Header>
          <MainText>dribbbleo</MainText>
          <Text>
            Discover the world’s
            <br /> top Designers & <br />
            Creatives.
          </Text>
        </Header>
        <Image src={chill} alt="dribbbleo" />
      </ImageSection>
      <FormSection>
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
