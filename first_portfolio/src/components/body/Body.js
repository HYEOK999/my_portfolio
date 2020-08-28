import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";

const BodyBlock = styled.section`
  &::after {
    width: 100%;
    height: 1000px;
    content: "";
    background: url(https://cdn.pixabay.com/photo/2015/05/15/09/29/apple-768022_1280.jpg)
      no-repeat center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(50%);
    z-index: -1;
  }
  z-index: 1;
  background-size: cover;
  width: 100%;
  height: 100%;
  .front {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Body = () => {
  return (
    <BodyBlock>
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
