import React from "react";
import styled from "styled-components";

const Container = styled.header`
  background-color: #ff4949;
`;
const Wrapper = styled.header`
  text-align: center;
  padding: 2rem;
  p {
    color: black;
  }
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
