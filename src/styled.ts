import { createGlobalStyle } from "styled-components";
import background from './assets/img/background.jpg'

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: 'Kanit', sans-serif;
  background: url(${background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #FAFAFA;
  }

`;

