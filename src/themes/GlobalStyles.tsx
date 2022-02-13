import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@800;900&family=Roboto:wght@300;400;500&display=swap'); */
*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
}
html{
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    width: 100vw; 
}
 body{
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: -0.03em;
  min-height: 100vh;
  font-size: 1.6rem;
  color: black;
}
p,h1, h2, h3,ul ,li,a{
    margin: 0;
    padding: 0;
    text-decoration: none;
}
`;
export default GlobalStyles;
