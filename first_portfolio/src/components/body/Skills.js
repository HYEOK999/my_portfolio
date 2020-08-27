import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const SkillsStyle = styled.div`
  color: white;
  height: 100%;
  padding: 13px 0;
`;
const Name = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  h1 {
    margin-block-start: 10px;
  }
  h1::after {
    position: absolute;
    content: "";
    display: block;
    width: 30px;
    right: 0px;
    left: 50%;
    border-bottom: 3px solid red;
    margin: 5px 0px;
  }
`;

const Skill = styled.section`
  font-size: 30px;
  ${media.lessThan("650px")`
    font-size: 20px;
  `}
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
  .title:first-child {
    padding-top: 20px;
  }
  .chart {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    img {
      width: 130px;
      border-radius: 20%;
      margin-left: 1rem;
      ${media.lessThan("650px")`
        width: 100px;
      `}
      ${media.lessThan("480px")`
        width: 70px;
        margin-left: 0.5rem;
      `}
    }
    span {
      position: relative;
      em {
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        font-size: 20px;
        position: absolute;
        left: 56%;
        top: 50%;
        transform: translate(-50%, -50%);
        ${media.lessThan("650px")`
          font-size: 15px;
        `}
        ${media.lessThan("480px")`
        font-size: 12px;
        `}
      }
    }
    span:hover {
      img {
        filter: blur(2px);
      }
      em {
        visibility: inherit;
      }
    }
    img:last-child {
      margin-right: 0;
    }
  }
  .chart:last-child {
    padding-bottom: 0;
  }
`;

function Skills() {
  return (
    <SkillsStyle>
      <Skill>
        <Name>
          <h1>Skills</h1>
        </Name>
        <div className="title">Language</div>
        <div className="chart">
          <span>
            <img src={require("../../image/c.png")} alt="c" />
            <em>Intermediate</em>
          </span>
          <span>
            <img src={require("../../image/c++.png")} alt="c++" />
            <em>Basic</em>
          </span>
          <span>
            <img src={require("../../image/java.png")} alt="java" />
            <em>Intermediate</em>
          </span>
          <span>
            <img src={require("../../image/javascript.png")} alt="javascript" />
            <em>Intermediate</em>
          </span>
        </div>
        <div className="title">Web Skills</div>
        <div className="chart">
          <span>
            <img src={require("../../image/html-5.png")} alt="html5" />
            <em>Intermediate</em>
          </span>
          <span>
            <img src={require("../../image/css.png")} alt="css" />
            <em>Intermediate</em>
          </span>
          <span>
            <img src={require("../../image/javascript.png")} alt="javascript" />
            <em>Intermediate</em>
          </span>
        </div>
        <div className="title">Framework</div>
        <div className="chart">
          <span>
            <img src={require("../../image/react.png")} alt="react" />
            <em>Intermediate</em>
          </span>
          <span>
            <img src={require("../../image/spring.jpg")} alt="spring" />
            <em>Intermediate</em>
          </span>
        </div>
        <div className="title">Database</div>
        <div className="chart">
          <span>
            <img src={require("../../image/mysql.png")} alt="mysql" />
            <em>Intermediate</em>
          </span>
          <span>
            <img src={require("../../image/oracle.png")} alt="orcle" />
            <em>Intermediate</em>
          </span>
        </div>
      </Skill>
    </SkillsStyle>
  );
}

export default Skills;
