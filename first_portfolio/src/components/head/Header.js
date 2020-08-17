import React from "react";
import styled from "styled-components";
import BlockItem from "./BlockItem";

const Head = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  background: #000010;
`;

const HeadText = styled.div`
  width: 775px;
  height: 4rem;
  background: black;
  color: white;
  border-radius: 2px 2px 30px 30px;
  opacity: 0.7;
`;

function Header() {
  return (
    <>
      <Head>
        <HeadText>
          <BlockItem />
        </HeadText>
      </Head>
    </>
  );
}

export default Header;
