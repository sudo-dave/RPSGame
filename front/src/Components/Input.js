import React from "react";
import { useState } from "react";
import styled from "styled-components";
const SubHeader = styled.div`
  input,
  button {
    display: block;
    margin: 0 auto;
  }
  p {
    margin-block: 2.5rem;
  }
  input {
    padding: 0.5rem;
    margin-block: 3rem;
  }
  .input-url {
    width: 80%;
  }
  .input-user {
    width: 50%;
  }
`;
export default function Input() {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const handleBtnPlayer = () => {
    console.log(url);
  };
  const handleBtnRandom = () => {};

  return (
    <div>
      <SubHeader>
        <h2>Enter the url, to challenge your freind.</h2>
        <input
          className="input-url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleBtnPlayer}>Start Playing</button>
        <p>OR.... add hr</p>
        <h3>Create a name and play globally</h3>
        <input
          type="text"
          className="input-user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleBtnRandom}>Play Random</button>
      </SubHeader>
    </div>
  );
}
