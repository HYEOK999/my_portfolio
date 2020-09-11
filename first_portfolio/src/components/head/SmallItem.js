import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";

const Mnav = styled.nav`
  display: none;
  button {
    position: absolute;
    top: 15px;
    left: 14px;
    padding: 10px 0;
    z-index: 2;
  }
  .close {
    padding: 15px 8.5px;
    background: black;
    .bar {
      position: relative;
    }

    .bar:before,
    .bar:after {
      content: "";
      position: absolute;
    }

    .bar:before,
    .bar:after,
    .bar {
      width: 24px;
      height: 2px;
      background: white;
      display: block;
    }

    .bar:before {
      bottom: 9px;
    }
    .bar:after {
      top: 9px;
    }
    .bar {
      .active:after {
        top: 100%;
      }
    }
    .bar {
      .active:before {
        bottom: -100%;
      }
    }
    .bar {
      .active {
        background-color: transparent;
      }
    }
    .bar,
    .bar:before,
    .bar:after {
      -webkit-transition: all 0.25s linear !important;
      transition: all 0.25s linear !important;
    }
    .bar {
      .active:after,
      .active:before {
        -webkit-transition-delay: 0.15s !important;
        transition-delay: 0.15s !important;
      }
    }
    .bar {
      .active:before {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
    .bar {
      .active:after {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
  }
  ${media.lessThan("768px")`
      display: block;
  `}
`;

const HeadText = styled.div`
  z-index: 999;

  ul {
    list-style: none;
    margin: 0;
    padding-inline-start: 0;
    padding-top: 13px;
    ${media.lessThan("768px")`
      text-align: center;
      padding-top: 55px;
    `}
  }

  li {
    margin-right: 3rem;
    padding: 10px;
    border: 0;
    cursor: pointer;
    opacity: 0.8;
    font-weight: 700;
    ${media.lessThan("768px")`
      margin-right: 0;
    `}
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

function SmallItem() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <Mnav>
      <button className="close" onClick={onToggle} open={open}>
        <span className="bar"></span>
      </button>
      {open && (
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
      )}
    </Mnav>
  );
}

export default SmallItem;
