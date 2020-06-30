import styled from "styled-components";

export const AboutContainer = styled.div`
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
export const Line = styled.p`
  border: 1px dashed #777;
  color: #fff;
  margin-bottom: 50px;
`;

export const AboutBody = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Div = styled.div`
  width: 66%;
  padding-right: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Developer = styled.p`
  font-size: 22px;
  color: #fff;
  margin-bottom: 35px;
  font-weight: 700;
  text-decoration-line: underline;
  text-decoration-color: #0690c5;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
export const InfoHeader = styled(Developer)``;
export const SkillsHeader = styled(Developer)``;

export const Info = styled.div`
  width: 34%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const LeftSpan = styled.span`
  list-style: none;
  display: inline-block;
  width: 40%;
  font-weight: bold;
  letter-spacing: 2px;
`;
export const RightSpan = styled.span`
  list-style: none;
  display: inline-block;
`;
export const P = styled.p`
  margin-bottom: 30px;
  line-height: 3;
`;
export const PP = styled.p`
  line-height: 2;
`;
export const Ul = styled.ul``;
export const Li = styled.li`
  display: flex;
  margin-bottom: 26px;
`;
export let SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export let Skill = styled.span`
  width: 50%;
  font-weight: bold;
  margin-bottom: 29px;
  color: #fff;
`;
export const Skills = styled.div`
  /* margin-top: 50px; */
`;
