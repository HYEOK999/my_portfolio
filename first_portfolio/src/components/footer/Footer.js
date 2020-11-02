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
  .logo {
    position: relative; display: block; perspective: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .front {
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
  }
  .back {
    position: absolute; top: 0px; 
    height: 100%; z-index: -1;
    transform-style: preserve-3d;
    text-align: center;
    transform: rotateY(-180deg);
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
  }
  .logo:hover .front {
    transform: rotateY(180deg);
  }
  .logo:hover .back {
    transform: rotateY(0deg); z-index: 1;
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
        <div className="logo">
          <figure className="front">
            <a href="https://github.com/cjdtjr6rl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKdAFbdqBEx0dF3-F_eir36e6NL3mv_jwEpg&usqp=CAU"
                alt="github logo"
              />
            </a>
          </figure>
          <figure className="back">
            <a href="https://github.com/cjdtjr6rl">
              <img
                src="https://avatars3.githubusercontent.com/u/43205396?s=460&u=93e86c1b3ab399f2301e3a7d2c94280649c50a31&v=4"
                alt="cjdtjr6rl git"
              />
            </a>
          </figure>
        </div>
    </Foot>
  );
}

export default Body;
