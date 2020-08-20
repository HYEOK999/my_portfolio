import React from "react";
import styled from "styled-components";

const AboutStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const MyImage = styled.nav`
  width: 30%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
  }
`;
const MySentence = styled.section`
  width: 70%;
  height: 500px;
  text-align: left;
  font-size: 30px;
  padding-right: 30px;
  h1 {
    margin-block-start: 0;
  }
  h1::after {
    content: "";
    display: block;
    width: 60px;
    border-bottom: 3px solid purple;
    margin: 5px 0px;
  }
  span {
    font-size: 18px;
  }
`;

function About() {
  return (
    <AboutStyle>
      <MyImage>
        <img src={require("../../image/Jun_image1.jpg")} alt="이준형" />
      </MyImage>
      <MySentence>
        <h1>About</h1>
        <span>
          디지털 사회을 선도하는 기업에 걸맞게 발맞춰 성장하는 개발자가 되고
          싶습니다. 그래서 저는 이러한 개발자가 되기 위하여 시멘틱한 웹페이지를
          구축함으로써 장애인, 비장애인 구별 없이 모든 사람이 잘 이용할 수 있는
          웹페이지를 제작하기 위해 목표를 세웠습니다.
          <br />첫 번째로 꾸준히 웹 페이지를 공부함으로써 이용자들이 어느 방면에
          불편함을 느끼고 있는지 동아리 활동을 통해 소통하였습니다. 그리하여,
          프론트엔드 개발자로서 사람들이 많이 이용하는 웹페이지를 만들고
          시멘틱한 페이지로 제작하겠습니다.
          <br />두 번째로 단국대학교에서 주최한 창업아이디어대회에 농산물 거래
          플랫폼을 개발하여 참가한 경험이 있습니다. 현재 어떠한 창업 아이템을
          가지고 나오는지 동향을 알 수 있었으며, 팀원 간의 의견을 서로 존중하고
          협동하는 수행력도 배웠습니다. 그리하여, 저는 그리고 선임분들의 조언을
          귀담아듣고 실행에 옮기는 팀 내 꼭 필요한 구성원이 되겠습니다.
        </span>
      </MySentence>
    </AboutStyle>
  );
}

export default About;
