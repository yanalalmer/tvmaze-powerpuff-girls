import React from "react";
// tools
import { Helmet } from 'react-helmet'
import { ThemeProvider } from "styled-components";
// styles
import { GlobalStyles } from "./styles/globalStyles";
import { lightTheme, darkTheme } from './styles/theme'

function App() {
  const currentTheme = 'light' ? lightTheme : darkTheme
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
          <Helmet>
              <title>The Powerpuff Girls</title>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
          </Helmet>
          this is my app
      </ThemeProvider>
    </>
  );
}

export default App;