import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import BoardTab from "./BoardTab";
import useFetch from "./useFetch";
export const Wrapper = styled.div`
  margin: 2rem auto;
  width: 85%;
  text-align: center;
  color: snow;
  /* use a max width; meida quriey */
`;
const Top = styled.div`
  background: linear-gradient(to bottom, #3a404d, #181c26);
  padding: 1.8rem;
  font-size: 1.7rem;
  font-weight: 900;
  border-radius: 5px;
  /* text-transform: uppercase; */
  letter-spacing: 5px;
`;
export default function Leaderboard() {
  const { data, loading, error } = useFetch("/api/scores");
  useEffect(() => {
    if (Object.keys(data).length !== 0 && data.constructor === Object)
      console.log(data);
  }, [data]);

  return (
    <Wrapper>
      <Top>Highest Scores</Top>

      {[12, 22, 98, 1, 4].map((val, i) => {
        return <BoardTab key={i} id={i} name={"david"} score={val} />;
      })}
    </Wrapper>
  );
}
