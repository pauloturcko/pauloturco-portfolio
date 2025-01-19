import { createGlobalStyle } from 'styled-components';
import theme from './Theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.colorBg};
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
`;

export default GlobalStyles;