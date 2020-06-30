import React from "react";
import { BodyContainer } from "./style.js";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Resume from "../Resume";
import Portfolio from "../Portfolio";

const Body = () => {
  return (
    <BodyContainer>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </BodyContainer>
  );
};

export default Body;
