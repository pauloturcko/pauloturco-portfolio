import { keyframes } from "styled-components";

const animeElement = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`

const theme = {
  colors: {
    primary: '#96C300',
    colorBg: '#141526',
    altBg: '#0B0C15',
    headerBg: '#202248',
    altText: '#A1A1A1',
    white: '#FFF',
    disabled: '#506900'
  },
  fonts: {
    primary: 'Nunito, sans-serif',
    secondary: 'Lato, sans-serif'
  },
  animations: {
    animeElement
  }
};

export default theme;