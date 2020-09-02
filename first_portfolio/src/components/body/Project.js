import React from "react";
import styled from "styled-components";

const ProjectStyle = styled.div`
  color: white;
  width: 100%;
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
    left: 51.4%;
    border-bottom: 3px solid yellow;
    margin: 5px 0px;
  }
`;

const Projects = styled.section`
  padding: 30px;
  article {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProjectItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  float: left;
  width: 40%;
  height: 350px;
  margin: 32px 9% 0 0;
  img {
    width: 100%;
    border-radius: 20px;
  }
  .content {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    .project_title {
      display: none;
      font-size: 30px;
      margin: 30px;
    }
    .project_content {
      display: none;
      font-size: 20px;
      margin: 20px;
    }
    .myButton {
      display: none;
    }
  }
  &:nth-child(2n) {
    margin-right: 0;
  }
  &:hover {
    .content {
      width: 60%;
    }
    .project_title {
      display: block;
    }
    .project_content {
      display: block;
    }
    .myButton {
      display: block;
      box-shadow: 3px 4px 0px 0px #899599;
      background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
      background-color: #ededed;
      border-radius: 15px;
      border: 1px solid #d6bcd6;
      display: inline-block;
      cursor: pointer;
      color: black;
      font-family: Arial;
      font-size: 17px;
      padding: 7px 25px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #e1e2ed;
    }
    .myButton:hover {
      background: linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
      background-color: #bab1ba;
    }
    .myButton:active {
      position: relative;
      top: 1px;
    }
  }
`;

function Project() {
  return (
    <ProjectStyle>
      <Name>
        <h1>Project</h1>
      </Name>
      <Projects>
        <article>
          <ProjectItem>
            <img
              src={require("../../image/schoolware1.png")}
              alt="schoolware"
            />
            <div className="content">
              <div className="project_title">Schoolware</div>
              <div className="project_content">LMS 서비스 플랫폼입니다.</div>
              <button className="myButton">더보기</button>
            </div>
          </ProjectItem>
          <ProjectItem>
            <img src={require("../../image/nalab_main.png")} alt="nalab_main" />
            <div className="content">
              <div className="project_title">NaLab</div>
              <div className="project_content">
                Lab 과목 서비스 플렛폼입니다.
              </div>
              <button className="myButton">더보기</button>
            </div>{" "}
          </ProjectItem>
        </article>
        <article>
          <ProjectItem>
            <img src={require("../../image/blockchain.png")} alt="blockchain" />
            <div className="content">
              <div className="project_title">농산물 거래 플랫폼</div>
              <div className="project_content">
                블록체인을 활용한 농산물 거래 플랫폼
              </div>
              <button className="myButton">더보기</button>
            </div>{" "}
          </ProjectItem>
          <ProjectItem>
            <img src={require("../../image/us_house.png")} alt="us_house" />
            <div className="content">
              <div className="project_title">우리의 집</div>
              <div className="project_content">기업분석콘테스트 출품작</div>
              <button className="myButton">더보기</button>
            </div>{" "}
          </ProjectItem>
        </article>
      </Projects>
    </ProjectStyle>
  );
}

export default Project;
