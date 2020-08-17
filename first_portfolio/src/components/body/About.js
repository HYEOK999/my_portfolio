import React from "react";
import styled from "styled-components";

const AboutStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  .Hello {
    margin: 0;
    font-size: 40px;
  }
`;

function About() {
  return (
    <AboutStyle>
      <div className="Hello">This is About</div>
    </AboutStyle>
  );
}

export default About;
