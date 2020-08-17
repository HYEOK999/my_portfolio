import React from "react";
import styled from "styled-components";

const HeadText = styled.div`
  ul {
    list-style: none;
    margin: 0;
  }

  li {
    float: left;
    margin-right: 3rem;
    padding: 1.5rem;
    border: 0;
    cursor: pointer;
    opacity: 0.6;
    font-weight: 700;
  }

  li:last-child {
    margin-right: 0;
  }

  li:hover {
    opacity: 2;
  }
`;

function BlockItem() {
  return (
    <HeadText>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </HeadText>
  );
}

export default BlockItem;
