import React from "react";
import styled from "styled-components";

import { Wrapper } from "./utill.css";
const Container = styled.header`
  background-color: #ff4949;
  padding-block: 1rem;
`;

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <h1>Rock-Paper-Scissors</h1>
        <p>Challenge your friends or the take on the entire world.</p>
      </Wrapper>
    </Container>
  );
}
