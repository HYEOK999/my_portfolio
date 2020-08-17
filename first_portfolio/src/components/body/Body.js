import React from "react";
import styled from "styled-components";

const BodyBlock = styled.body`
  width: 100%;
  height: 55rem;
  background: gray;
  color: black;
`;

function Body() {
  return <BodyBlock>이곳은 바디입니다.</BodyBlock>;
}

export default Body;
