import React from "react";
import Hero from "../Components/reUse/Hero";
import HoverSide from "../Components/reUse/HoverSide";
import styled from "styled-components";

const OpayScreen = () => {
  return (
    <div>
      <Container>
        <Hero />
        <HoverSide />
      </Container>
    </div>
  );
};

export default OpayScreen;

const Container = styled.div`
  width: 100%;
  margin: 0;
`;
