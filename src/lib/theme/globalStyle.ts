import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        font-size: 16px;
        line-height: 1.5;
    }

    body {
        margin: 0;
        font-family: 'Mulish', sans-serif;
        overflow-x: hidden;
        box-sizing: border-box;
        min-height: 100vh;
    }

`;

export default GlobalStyle;
