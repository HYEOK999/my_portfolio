import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  width: 100%;
  height: 100%;
  background: white;
  color: black;
  text-align: center;
  font-size: 40px;
  padding: 40px 0;
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
`;

function Body() {
  return (
    <Foot id="footer">
      Contact
      <div class="email">Email: tnstnejddjfl@nave.com</div>
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
