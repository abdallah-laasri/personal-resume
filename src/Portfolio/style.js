import styled from "styled-components";

export const PortfolioContainer = styled.div`
  color: #fff;
  font-size: 16px;
  width: 80%;
  margin: 0 auto;
  padding: 45px 0;
  /* height: 100vh; */

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Title = styled.p`
  color: rgba(0, 163, 225, 0.86);
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: 900;
`;
export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const A = styled.a`
  width: 400px;
  height: 300px;
  border-radius: 8px;
  margin: 20px;
  flex-grow: 1;
  transition: all 0.6s;
  position: relative;

  @media (max-width: 768px) {
    margin: 20px 0;
  }

  &:hover {
    transform: scale(1.09);
  }
`;
export const Project = styled.div`
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
  }
`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

const languages = {
  profile: "Reactjs + Styled-Components",
  hunt: "Reactjs + Redux + Styled-Components",
  report: "Reactjs + Styled-Components",
  resume: "Reactjs + Styled-Components",
  company: "HTML + CSS",
  calculator: "javascript"
};
const projectNames = {
  profile: "Programmer profile",
  hunt: "ProductHunt website redesign",
  report: "The platform of requesting reports ",
  resume: "Personal resume",
  company: "Company portfolio",
  calculator: "Calculator"
};

export const Cover = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  &:before{
    content:'${props => projectNames[props.product]}';
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 1s;
    font-size:25px;
    margin-left:30px;
    font-weight:700;
    z-index:10;
  }
  &:after{
    content:'${props => languages[props.product]}';
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: all 1s;
    font-size:25px;
    margin-left:30px;
    font-weight:700;
    z-index:10;
  }
  &:hover {
    background-color: #00a3e1a8;
    border-radius: 8px;

    &:before {
      color: white;
      opacity: 1;
      top: 30%;
    }
    &:after{
      color: white;
      opacity: 1;
      bottom: 30%;
    }
  }
`;
