import { createGlobalStyle } from 'styled-components';

import { ROOT_FONT_SIZE } from '@styles/themes/Font';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: ${ROOT_FONT_SIZE}px;
    line-height: 1.5;
  }

  html,
  body {
    padding: 0;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
