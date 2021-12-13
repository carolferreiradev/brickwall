import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #1b1b1b;
    --red300: #3D0000;
    --red200: #DB1D08;
    --red100: #ff0000;
    --text: #1c1817;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}
body, input, textarea, button{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
}
h1,h2,h3, h4, h5, h6, strong{
    font-weight: 700;
    font-family: 'Poppins', sans-serif; 
}

body{
  background: rgb(255,154,156);
background: linear-gradient(90deg, rgba(255,154,156,1) 1%, rgba(250,208,196,1) 100%);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

button{
    cursor: pointer;
}
p{
    text-align: justify;
}

[disabled]{
opacity: 0.8;
cursor: not-allowed;
}
`;
