import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box; 
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    -webkit-user-drag: none;
  }

  body {
    padding: 0;
    margin: 0;
  }

  header, main, footer {
    margin: 0 auto;
    max-width: 1280px;
    /* padding: 0 1.5rem; */
    /* padding: 0 6rem; */
    }
`;
