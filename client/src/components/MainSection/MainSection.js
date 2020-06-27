import React from "react";
import { Link } from "react-router-dom";
import {
  SectionContainer,
  Text,
  TextContainer,
  Image,
  MainText,
} from "./StyledMainSection";
import { SignUpButton } from "../Header/styledHeader";
import art from "../../assets/header_art.png";
import useAuth from "../../hooks/useAuth";

const MainSection = () => {
  const { user } = useAuth();

  return (
    <>
      {!user && (
        <SectionContainer>
          <TextContainer>
            <MainText>Discover the world’s top designers & creatives</MainText>
            <Text>
              Dribbbleo is the leading destination to find & showcase creative
              work and home to the world's best design professionals.
            </Text>
            <Link to="/signup">
              <SignUpButton>Sign up</SignUpButton>
            </Link>
          </TextContainer>
          <Image src={art} alt="art" />
        </SectionContainer>
      )}
    </>
  );
};

export default MainSection;
