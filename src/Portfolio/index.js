import React from "react";
import {
  PortfolioContainer,
  Title,
  Projects,
  Project,
  A,
  Img,
  Cover
} from "./style.js";
import Picture1 from "../images/programmer.PNG";
import Picture2 from "../images/product.PNG";
import Picture3 from "../images/report.PNG";
import Picture4 from "../images/profil.PNG";
import Picture5 from "../images/company.PNG";
import Picture6 from "../images/calculator.PNG";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Title>Portfolio</Title>

      <Projects>
        <A
          href="https://abdallah-laasri.github.io/programmer-profile"
          target="_blank"
        >
          <Project>
            <Img src={Picture1} />
          </Project>
          <Cover product="profile"></Cover>
        </A>
        <A
          href="http://abdallah-laasri.github.io/producthunt-app-redesign"
          target="_blank"
        >
          <Project>
            <Img src={Picture2} />
          </Project>
          <Cover product="hunt"></Cover>
        </A>
        <A
          href="http://abdallah-laasri.github.io/french-reports"
          target="_blank"
        >
          <Project>
            <Img src={Picture3} />
          </Project>
          <Cover product="report"></Cover>
        </A>
        <A
          href="https://abdallah-laasri.github.io/programmer-profile"
          target="_blank"
        >
          <Project>
            <Img src={Picture4} />
          </Project>
          <Cover product="resume"></Cover>
        </A>
        <A
          href="https://abdallah-laasri.github.io/programmer-profile"
          target="_blank"
        >
          <Project>
            <Img src={Picture5} />
          </Project>
          <Cover product="company"></Cover>
        </A>
        <A
          href="https://abdallah-laasri.github.io/programmer-profile"
          target="_blank"
        >
          <Project>
            <Img src={Picture6} />
          </Project>
          <Cover product="calculator"></Cover>
        </A>
      </Projects>
    </PortfolioContainer>
  );
};
export default Portfolio;
