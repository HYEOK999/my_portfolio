import React from "react";
import Header from "./components/head/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
