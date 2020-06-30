import React from "react";
import {
  AboutContainer,
  Title,
  Line,
  P,
  Info,
  Ul,
  Li,
  Div,
  Developer,
  InfoHeader,
  AboutBody,
  LeftSpan,
  RightSpan,
  SkillsHeader,
  Skill,
  Skills,
  SkillsContainer
} from "./style.js";

const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Line />
      <AboutBody>
        <Div>
          <Developer>Web Developer</Developer>
          <P>
            I am a web developer from Agadir, Morocco. I create beautiful
            professional websites using best practice accessibility. I enjoy
            turning complex problems into simple, beautiful and intuitive
            interface designs.
          </P>
        </Div>
        <Info>
          <InfoHeader>Personal Information</InfoHeader>
          <Ul>
            <Li>
              <LeftSpan>Name :</LeftSpan>
              <RightSpan>Abdallah Laasri</RightSpan>
            </Li>
            <Li>
              <LeftSpan>Age :</LeftSpan>
              <RightSpan>25 Years</RightSpan>
            </Li>
            <Li>
              <LeftSpan>Residence :</LeftSpan>
              <RightSpan>Agadir, Morocco</RightSpan>
            </Li>
            <Li>
              <LeftSpan>Address :</LeftSpan>
              <RightSpan>Zawia, Aourir</RightSpan>
            </Li>
            <Li>
              <LeftSpan>Email :</LeftSpan>
              <RightSpan> abdallahlaasri3@gmail.com</RightSpan>
            </Li>
            <Li>
              <LeftSpan>Phone :</LeftSpan>
              <RightSpan>(+212) 687252319</RightSpan>
            </Li>
          </Ul>
        </Info>
      </AboutBody>
      <Skills>
        <SkillsHeader>My skills</SkillsHeader>
        <SkillsContainer>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>JAVASCRIPT</Skill>
          <Skill>REACTjs</Skill>
        </SkillsContainer>
      </Skills>
    </AboutContainer>
  );
};
export default About;
