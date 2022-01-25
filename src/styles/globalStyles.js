import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        font-size: 16px;
    }
    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        font-weight: normal;
        overflow-x: hidden;
    }
    ol, ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }
    body {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        color: inherit;
        text-decoration: none;
        font-family: inherit;
    }
`;