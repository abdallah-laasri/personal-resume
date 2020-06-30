import React from "react";
import SideBar from "../SideBar";
import Body from "../Body";
import { AppContainer } from "./style.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AppContainer>
      <Router>
        <SideBar />
        <Body />
      </Router>
    </AppContainer>
  );
}

export default App;
