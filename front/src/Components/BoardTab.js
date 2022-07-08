import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => (props.id % 2 == 0 ? "#7D8AC2" : "#937dc2")};
  padding: 1.3rem;
  font-size: 1.4rem;
  text-align: left;
  span {
    float: right;
  }
`;
export default function BoardTab({ id, name, score }) {
  return (
    <Container id={id}>
      {id + ". " + name}
      <span>{score}</span>
    </Container>
  );
}
