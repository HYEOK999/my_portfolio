import React from "react";
import styled from "styled-components";
import BlockItem from "./BlockItem";

const Head = styled.header`
  width: 97vw;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
`;

const HeadText = styled.div`
  width: 775px;
  height: 4rem;
  background: black;
  color: #fff;
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
