import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

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
    transition: all 0.2s ease;
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
      font-size: 13px;
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

const Proimg = styled.div`
  float: left;
  display: inline-block;
  width: 59%;
  margin-right: 20px;
  margin-top: 4%;
  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
`;
const Prosen = styled.div`
  .intro {
    margin-bottom: 10px;
    .tit {
      font-size: 20px;
      font-weight: 600;
    }
    .icon {
      font-size: 0.875rem;
      color: #4a5568;
      padding: 0.25rem 0.75rem;
      font-weight: 600;
      display: inline-block;
      border-radius: 9999px;
      background-color: #edf2f7;
      margin-right: 5px;
    }
    a {
      font-size: 0.875rem;
      color: #4a5568;
      padding: 0.25rem 0.75rem;
      font-weight: 600;
      display: inline-block;
      border-radius: 2px;
      background-color: mediumspringgreen;
      margin-right: 5px;
      text-decoration: none;
    }
  }
  .intro:last-child {
    margin-bottom: 0;
  }
`;

function Project() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const [dialog2, setDialog2] = useState(false);
  const onClick2 = () => {
    setDialog2(true);
  };
  const [dialog3, setDialog3] = useState(false);
  const onClick3 = () => {
    setDialog3(true);
  };
  const [dialog4, setDialog4] = useState(false);
  const onClick4 = () => {
    setDialog4(true);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };
  const onCancel2 = () => {
    console.log("취소");
    setDialog2(false);
  };
  const onCancel3 = () => {
    console.log("취소");
    setDialog3(false);
  };
  const onCancel4 = () => {
    console.log("취소");
    setDialog4(false);
  };

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
              <button className="myButton" onClick={onClick}>
                더보기
              </button>
            </div>
          </ProjectItem>
          <ProjectItem>
            <img src={require("../../image/nalab_main.png")} alt="nalab_main" />
            <div className="content">
              <div className="project_title">NaLab</div>
              <div className="project_content">
                Lab 과목 서비스 플렛폼입니다.
              </div>
              <button className="myButton" onClick={onClick2}>
                더보기
              </button>
            </div>
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
              <button className="myButton" onClick={onClick3}>
                더보기
              </button>
            </div>
          </ProjectItem>
          <ProjectItem>
            <img src={require("../../image/us_house.png")} alt="us_house" />
            <div className="content">
              <div className="project_title">우리의 집</div>
              <div className="project_content">기업분석콘테스트 출품작</div>
              <button className="myButton" onClick={onClick4}>
                더보기
              </button>
            </div>
          </ProjectItem>
        </article>
      </Projects>
      <Modal
        title="Schoolware"
        cancelText="닫기"
        onCancel={onCancel}
        visible={dialog}
      >
        <Proimg>
          <img src={require("../../image/schoolware2.png")} alt="schoolware2" />
        </Proimg>
        <Prosen>
          <div className="intro">
            <div className="tit">Intro</div>
            2015년부터 제작 되어진 LMS 서비스 플랫폼입니다. 나사렛대학교
            IT융합학부 등 여러 학과에서 사용중이며 총 회원 수 2000명 이상을
            보유하고 있습니다. 학년, 수업별로 방을 생성할 수 있으며, 과제 제출,
            출석 등 여러 서비스를 권한별로 이용할 수 있습니다.
          </div>
          <div className="intro">
            <div className="tit">Role</div>- 기자재 관리 (추가, 삭제)
            <br />
            - 기자재 예약 (목록, 대여목록, 반납목록)
            <br />
            - 기자재 대여일 수 변경
            <br />- 예약현황달력 보기
            <br />- 자신이 대여한 목록 확인
          </div>
          <div className="intro">
            <div className="tit">Link</div>
            <a
              href="http://icnet.kornu.ac.kr/schoolware/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schoolware 바로가기
            </a>
          </div>
          <div className="intro">
            <div className="icon">#HTML5</div>
            <div className="icon">#CSS3</div>
            <div className="icon">#JavaScript</div>
            <div className="icon">#Spring</div>
            <div className="icon">#MySQL</div>
          </div>
        </Prosen>
      </Modal>
      <Modal
        title="NaLab"
        cancelText="닫기"
        onCancel={onCancel2}
        visible={dialog2}
      >
        <Proimg>
          <img src={require("../../image/nalab2.png")} alt="nalab2" />
        </Proimg>
        <Prosen>
          <div className="intro">
            <div className="tit">Intro</div>
            나사렛대학교에서 Lab이라는 과목을 생성하여 그에 맞게 동아리에서
            제작하였습니다. 학년 구분 없이 Lab단위로 인원을 구성 가능하며
            Lab안에서 팀으로도 구성이 가능합니다. 관리자가 교수에게 Lab지원금을
            배정해주면 그에 맞게 교수도 학생이 포함된 팀에게 지원금을 나누어주어
            물품 구매도 가능합니다.
          </div>
          <div className="intro">
            <div className="tit">Role</div>- Lab 모임방 페이지 생성
            <br />- 학생 랩에 추가기능
            <br />- 랩 안에서 학생들 추가하여 팀에 소속
            <br />
            - 게시판 관리 (추가, 수정, 삭제)
            <br />- 활동지원금 운영 (구매, 요청)
          </div>
          <div className="intro">
            <div className="tit">Link</div>
            <a
              href="http://icnet.kornu.ac.kr/nalab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NaLab 바로가기
            </a>
          </div>
          <div className="intro">
            <div className="icon">#HTML5</div>
            <div className="icon">#CSS3</div>
            <div className="icon">#JavaScript</div>
            <div className="icon">#Spring</div>
            <div className="icon">#MySQL</div>
          </div>
        </Prosen>
      </Modal>
      <Modal
        title="농산물 거래 플랫폼"
        cancelText="닫기"
        onCancel={onCancel3}
        visible={dialog3}
      >
        <Proimg>
          <video controls autoPlay loop>
            <source src={require("../../image/seller.mp4")} type="video/mp4" />
            IE 8 이하는 비디오가 나오지 않습니다. IE 버전을 업데이트 하시길
            바랍니다.
          </video>
        </Proimg>
        <Prosen>
          <div className="intro">
            <div className="tit">Intro</div>
            농산물 거래를 웹페이지로 구축을 하며, 프라이빗 블록체인으로 거래를
            하는 원장을 저장하여 보안상으로도 안정적이게 구축하였습니다.
          </div>
          <div className="intro">
            <div className="tit">Role</div>- Front 페이지 전체 구축
          </div>
          <div className="intro">
            <div className="tit">Download</div>
            <a
              href={require("../../image/농산물_거래_플랫폼.zip")}
              download="농산물_거래_플랫폼.zip"
            >
              농산물 거래 플랫폼 다운로드
            </a>
          </div>
          <div className="intro">
            <div className="icon">#HTML5</div>
            <div className="icon">#CSS3</div>
            <div className="icon">#React</div>
            <div className="icon">#HeidiSQL</div>
          </div>
        </Prosen>
      </Modal>
      <Modal
        title="우리의 집"
        cancelText="닫기"
        onCancel={onCancel4}
        visible={dialog4}
      >
        <Proimg>
          <img src={require("../../image/us_house2.png")} alt="us_house2" />
        </Proimg>
        <Prosen>
          <div className="intro">
            <div className="tit">Intro</div>
            학교에서 주최하는 기업분석콘테스트에 참가하여 구축을 하였습니다.
            메인 페이지는 현재 '오늘의 집'이라는 기업을 카피하여 동일하게
            만들었으며 다른 페이지는 팀의 소개를 나타내는 페이지를
            나타내었습니다.
          </div>
          <div className="intro">
            <div className="tit">Role</div>- Front 페이지 전체 구축
          </div>
          <div className="intro">
            <div className="tit">Link</div>
            <a
              href="http://cjdtjr6rl.dothome.co.kr/my_house/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              우리의 집 바로가기
            </a>
          </div>
          <div className="intro">
            <div className="icon">#HTML5</div>
            <div className="icon">#CSS3</div>
            <div className="icon">#JavaScript</div>
          </div>
        </Prosen>
      </Modal>
    </ProjectStyle>
  );
}

export default Project;
