import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";

const BodyBlock = styled.section`
  width: 100%;
  height: 100%;
  background: black;
  .back {
    background: url(https://cdn.pixabay.com/photo/2015/05/15/09/29/apple-768022_1280.jpg)
      no-repeat center;
    background-size: cover;
    width: 100%;
    height: 838px;
    filter: brightness(50%);
  }
  .front {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Body = () => {
  return (
    <BodyBlock>
      <div className="back" />
      <div className="front">
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/project" component={Project} />
      </div>
    </BodyBlock>
  );
};

export default Body;
