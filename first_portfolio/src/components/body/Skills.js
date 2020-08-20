import React from "react";
import styled from "styled-components";

const SkillsStyle = styled.div`
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

function Skills() {
  return (
    <SkillsStyle>
      <div className="Hello">This is Skills</div>
    </SkillsStyle>
  );
}

export default Skills;
