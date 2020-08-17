import React from "react";
import styled from "styled-components";

const ProjectStyle = styled.div`
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

function Project() {
  return (
    <ProjectStyle>
      <div className="Hello">This is Project</div>
    </ProjectStyle>
  );
}

export default Project;
