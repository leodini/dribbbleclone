import React from "react";
import {
  SectionContainer,
  Text,
  TextContainer,
  Image,
  MainText,
} from "./StyledMainSection";
import { SignUpButton } from "../Header/styledHeader";
import art from "../../assets/art.svg";

const MainSection = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <MainText>Discover the world’s top designers & creatives</MainText>
        <Text>
          Dribbble is the leading destination to find & showcase creative work
          and home to the world's best design professionals.
        </Text>
        <SignUpButton>Sign up</SignUpButton>
      </TextContainer>
      <Image src={art} alt="art" />
    </SectionContainer>
  );
};

export default MainSection;
