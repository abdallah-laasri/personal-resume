import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  min-width: 200px;
  background-color: #17181b;
  /* height: 100vh; */
  position: relative;

  @media (max-width: 768px) {
    position: absolute;
    left: ${(props) => (props.thba ? "-200px" : "0px")};
    z-index: 3;
    width: 200px;
  }
`;
export const Btn = styled.span`
  width: 40px;
  height: 40px;
  display: none;
  color: #fff;
  position: absolute;
  top: -10px;
  z-index: 10;
  right: -40px;
  padding: 6px;
  background-color: #fff;

  @media (max-width: 768px) {
    right: -40px;
    display: block;
  }
`;
export const AvatarContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const Avatar = styled.img`
  width: 100%;
  height: 100%;
`;
export const Myname = styled.p`
  width: 100%;
  color: #fff;
  background-color: rgba(0, 163, 225, 0.86);
  position: absolute;
  bottom: 5px;
  font-weight: bold;
  text-align: center;
  padding: 4px 0;
`;
export const Ul = styled.ul`
  & a {
    text-decoration: none;
  }
`;
export const Li = styled.li`
  text-align: center;
  border-bottom: 1px solid #777;
  padding: 17px 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #484848;
    & span {
      color: #fff;
    }
    & i {
      color: #fff;
    }
  }
  & span {
    color: #777;
    text-decoration: none;
    font-size: 14px;
    /* &:hover {
      color: #fff;
    } */
  }
`;
export const Icon = styled.i`
  color: #777;
  width: 33%;
  font-size: 17px;
  text-align: right;
  padding-right: 10px;
`;
export const Footer = styled.p`
  color: #777;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 12px;
  margin-bottom: 20px;
`;
