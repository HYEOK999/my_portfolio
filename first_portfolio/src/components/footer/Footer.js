import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Foot = styled.footer`
  width: 100%;
  height: 100%;
  background: white;
  color: black;
  text-align: center;
  font-size: 15px;
  padding: 40px 0;
  h1 {
    margin-block-start: 10px;
  }
  .email {
    padding: 20px 0;
    font-size: 30px;
  }
  img {
    width: 200px;
    height: 200px;
    border: 3px solid black;
    border-radius: 50%;
  }
  ${media.lessThan("600px")`
    padding: 20px 0;
    .email {
      font-size: 15px;
    }
    img {
      width: 100px;
      height: 100px;
    }
  `}
`;

function Body() {
  return (
    <Foot id="footer">
      <h1>Contact</h1>
      <div className="email">Email: tnstnejddjfl@naver.com</div>
      <a href="https://github.com/cjdtjr6rl">
        <img
          src="https://avatars3.githubusercontent.com/u/43205396?s=460&u=93e86c1b3ab399f2301e3a7d2c94280649c50a31&v=4"
          alt="cjdtjr6rl git"
        />
      </a>
    </Foot>
  );
}

export default Body;
