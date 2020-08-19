import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    opacity: 0.8;
    font-weight: 700;
  }

  li:last-child {
    margin-right: 0;
  }

  li:hover {
    opacity: 2;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

function BlockItem() {
  return (
    <HeadText>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </HeadText>
  );
}

export default BlockItem;
