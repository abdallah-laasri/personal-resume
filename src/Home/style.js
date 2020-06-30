import styled from "styled-components";
import bg from "../images/home-bg.jpg";

export const HomeContainer = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.5;
  }
`;

// export const BlackDiv = styled.div`
//   background-color: black;
//   width: 100%;
//   height: 100%;
//   opacity: 0.5;
//   position: absolute;
//   z-index: 1;
// `;

export const Header = styled.h1`
  color: #099cd6;
  font-size: 67px;
  font-family: "Playfair Display", serif;
  font-weight: BOLD;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

export const P = styled.p`
  color: #fff;
  font-size: 42px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin: 40px 0;
  }
`;

export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
`;

export const Icon = styled.span`
  color: #fff;
  margin: 20px;
  padding: 5px;
  border: 2px solid #fff;
  border-radius: 30%;
  cursor: pointer;
  font-size: 33px;
  width: 50px;
  height: 50px;
`;
