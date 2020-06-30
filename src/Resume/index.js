import React from "react";
import {
  ResumeContainer,
  Title,
  Line,
  LeftHeader,
  Div,
  Years,
  Vline,
  P,
  H1,
  Start,
  End
} from "./style.js";

const Resume = props => {
  return (
    <ResumeContainer>
      <Title>My Resume</Title>
      <Line />
      <LeftHeader>Education</LeftHeader>
      <Skill
        start={2017}
        end={2019}
        deplom={"Diplôme de Technicien Spécialisé"}
        filiere={"Techniques de Développement Informatique"}
        school={"Centre Mixte de Formation Professionnelle - Agadir"}
      />
      <Skill
        start={2013}
        end={2017}
        deplom={"Diplôme d'Etude Universitaire Général"}
        filiere={"Sciences de la Matière Physique"}
        school={"Université Ibn Zohr - Agadir"}
      />
      <Skill
        start={2012}
        end={2013}
        deplom={"BAC"}
        filiere={"Sciences de la Vie et de Terre"}
        school={"Lycée Aourir - Agadir"}
      />
    </ResumeContainer>
  );
};
export default Resume;

const Skill = props => {
  return (
    <Div>
      <Years>
        <Start>{props.start}</Start>
        <End>{props.end}</End>
      </Years>
      <Vline></Vline>
      <div>
        <H1>{props.deplom}</H1>
        <p>{props.filiere}</p>
        <P>{props.school}</P>
      </div>
    </Div>
  );
};
