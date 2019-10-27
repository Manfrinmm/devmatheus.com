import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;  
  }

  html,body,#root{
    height:100%;
  }

  #root{
    overflow-y:auto;
  }

  body{
    -webkit-font-smoothing:antialiased;
  }
`;

export default GlobalStyle;
