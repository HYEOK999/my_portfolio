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
    }
    .project_content {
      display: none;
    }
    button {
      display: none;
    }
  }
  &:nth-child(2n) {
    margin-right: 0;
  }
  &:hover {
    .content {
      width: 80%;
    }
    .project_title {
      display: block;
    }
    .project_content {
      display: block;
    }
    button {
      display: block;
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
              <div className="project_title">프로젝트1 제목</div>
              <div className="project_content">프로젝트1 내용</div>
              <button>더보기</button>
            </div>
          </ProjectItem>
          <ProjectItem>
            <img src={require("../../image/nalab_main.png")} alt="nalab_main" />
            <div className="content">
              <div className="project_title">프로젝트2 제목</div>
              <div className="project_content">프로젝트2 내용</div>
              <button>더보기</button>
            </div>{" "}
          </ProjectItem>
        </article>
        <article>
          <ProjectItem>
            <img src={require("../../image/nalab_main.png")} alt="nalab_main" />
            <div className="content">
              <div className="project_title">프로젝트3 제목</div>
              <div className="project_content">프로젝트3 내용</div>
              <button>더보기</button>
            </div>{" "}
          </ProjectItem>
          <ProjectItem>
            <img src={require("../../image/nalab_main.png")} alt="nalab_main" />
            <div className="content">
              <div className="project_title">프로젝트4 제목</div>
              <div className="project_content">프로젝트4 내용</div>
              <button>더보기</button>
            </div>{" "}
          </ProjectItem>
        </article>
      </Projects>
    </ProjectStyle>
  );
}

export default Project;
