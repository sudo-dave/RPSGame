import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
*{
 font-family: 'Roboto', sans-serif;
 margin: 0;
 padding: 0;
}
html:focus-within {
  scroll-behavior: smooth;
}
body{
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: #541690;
  color: white;
}
input, button, textarea, select {
  font: inherit;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
`;
