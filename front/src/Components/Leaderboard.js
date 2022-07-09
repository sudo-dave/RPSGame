import styled from "styled-components";
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

  return (
    <Wrapper>
      <Top>High Scores</Top>
      {data}
    </Wrapper>
  );
}
