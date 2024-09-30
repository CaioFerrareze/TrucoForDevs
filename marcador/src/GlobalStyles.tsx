import { createGlobalStyle } from 'styled-components';
import { colors, typography} from './StyleGuide';


// Estilos globais para o app
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.primaryWhite};
    font-family: ${typography.fontFamily};
    font-weight: 400;
    font-size: 16px;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
