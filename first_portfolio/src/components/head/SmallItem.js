import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Mnav = styled.nav`
  display: none;
  position: absolute;
  top: 6px;
  left: 14px;
  padding: 10px 0;
  z-index: 2;
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

function SmallItem() {
  return (
    <Mnav>
      <button class="close">
        <span class="bar"></span>
      </button>
    </Mnav>
  );
}

export default SmallItem;
