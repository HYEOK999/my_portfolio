import React from "react";
import styled from "styled-components";

const HomeStyle = styled.span`
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

function Home() {
  return (
    <HomeStyle>
      <div className="Hello">This is Home</div>
    </HomeStyle>
  );
}

export default Home;
