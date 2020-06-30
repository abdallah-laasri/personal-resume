import React from "react";
import "./style.js";
import { Link } from "react-router-dom";
import {
  AvatarContainer,
  Avatar,
  Container,
  Myname,
  Ul,
  Li,
  Icon,
  Footer,
  Btn
} from "./style";
import Picture from "../images/me.jpg";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  showSideBare = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    return (
      <Container thba={this.state.isHidden}>
        <Btn
          onClick={() => {
            this.showSideBare();
          }}
          className="fas fa-home"
        ></Btn>
        <AvatarContainer>
          <Myname>Abdallah Laasri</Myname>
          <Avatar src={Picture} />
        </AvatarContainer>
        <Ul>
          <Link to="/">
            <Li>
              <Icon className="fas fa-home" />
              <span>HOME</span>
            </Li>
          </Link>
          <Link to="/about">
            <Li>
              <Icon className="fas fa-user-alt" />
              <span>ABOUT ME</span>
            </Li>
          </Link>
          <Link to="/resume">
            <Li>
              <Icon className="fas fa-id-badge" />
              <span>RESUME</span>
            </Li>
          </Link>
          <Link to="/portfolio">
            <Li>
              <Icon className="fas fa-briefcase" />
              <span>PORTFOLIO</span>
            </Li>
          </Link>
        </Ul>
        <Footer>2020 © Abdallah Laasri.All Right Reserved.</Footer>
      </Container>
    );
  }
}

export default SideBar;
