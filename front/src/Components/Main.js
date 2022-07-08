import React from "react";
import styled from "styled-components";
import { Wrapper } from "./utill.css";
import Input from "./Input";
const Outer = styled.main`
  background-color: #937dc2;
  padding-block: 2rem;
`;

export default function Main() {
  return (
    <Outer>
      <Wrapper>
        <Input />
      </Wrapper>
    </Outer>
  );
}
