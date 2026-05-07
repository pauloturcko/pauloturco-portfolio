import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/Theme';
import { ThemeProvider } from 'styled-components';
import Home from './Components/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;