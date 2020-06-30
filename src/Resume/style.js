import styled from "styled-components";

export const ResumeContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 45px 0;
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
export const LeftHeader = styled.p`
  color: #fff;
  text-align: center;
  font-size: 36px;
  text-decoration: underline;
  text-decoration-color: #0690c5;
  margin-bottom: 35px;
`;
export const Div = styled.div`
  /* width: 400px; */
  /* height: 400px; */
  padding: 30px;
  color: #fff;
  display: flex;
  margin-bottom: 44px;
`;
export const Years = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
export const Vline = styled.div`
  border: 1px solid rgba(0, 163, 225, 0.86);
  margin: 0 40px 0 20px;
  width: 2px;
  position: relative;

  &:before {
    content: "";
    width: 14px;
    height: 14px;
    border: 2px solid rgba(0, 163, 225, 0.86);
    border-radius: 50%;
    position: absolute;
    top: -18px;
    left: -9px;
  }
  &:after {
    content: "";
    width: 14px;
    height: 14px;
    border: 2px solid rgba(0, 163, 225, 0.86);
    border-radius: 50%;
    position: absolute;
    bottom: -19px;
    left: -9px;
  }
`;
export const H1 = styled.h1`
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
export const P = styled.p`
  color: rgba(0, 163, 225, 0.86);
`;

export const End = styled.span`
  position: absolute;
  top: -26px;
  left: -54px;
`;
export const Start = styled.span`
  position: absolute;
  bottom: -22px;
  left: -54px;
`;
