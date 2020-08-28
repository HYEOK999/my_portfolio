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
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

const ProjectItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 40%;
  height: 350px;
  border: 1px solid white;
  margin: 10px 9% 0 0;
  img {
    width: 40%;
  }
  .content {
    width: 60%;
    border-left: 1px solid black;
  }
  &:nth-child(2n) {
    margin-right: 0;
  }
`;

function Project() {
  return (
    <ProjectStyle>
      <Name>
        <h1>Project</h1>
      </Name>
      <Projects>
        <ProjectItem>
          <img src={require("../../image/schoolware1.png")} alt="schoolware" />
          <div className="content">프로젝트1 설명</div>
        </ProjectItem>
        <ProjectItem>
          <img src={require("../../image/nalab_main.png")} alt="nalab_main" />
          <div className="content">프로젝트2 설명</div>
        </ProjectItem>
        <ProjectItem>
          <img src={require("../../image/c.png")} alt="c" />
          <div className="content">프로젝트3 설명</div>
        </ProjectItem>
        <ProjectItem>
          <img src={require("../../image/c.png")} alt="c" />
          <div className="content">프로젝트4 설명</div>
        </ProjectItem>
      </Projects>
    </ProjectStyle>
  );
}

export default Project;
