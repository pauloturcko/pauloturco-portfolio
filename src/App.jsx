import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/Theme';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;