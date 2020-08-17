import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  width: 100%;
  height: 100%;
  background: pink;
  color: black;
`;

function Body() {
  return <Foot>이곳은 푸터입니다.</Foot>;
}

export default Body;
