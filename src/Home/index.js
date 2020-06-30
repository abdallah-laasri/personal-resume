import React from "react";
import { HomeContainer, Header, P, Div, Icon } from "./style.js";

const Home = () => {
  return (
    <HomeContainer>
      <Div>
        <Header>ABDALLAH LAASRI</Header>
        <P>i am a web developer</P>
        <Icon className="fab fa-github" />
        <Icon className="fab fa-linkedin" />
      </Div>
    </HomeContainer>
  );
};
export default Home;
