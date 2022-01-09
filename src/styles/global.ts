import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        outline: 0;
    }
    body{
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font-family: 'Roboto Slab', serif;
        font-size: 15px;
    }
    h1, h2, h3, h4, h5, h6, strong, p{
         font-weight: 500;
         color: black;
    }
    .MuiButton-root {
        cursor: pointer;
        color: black;
        font-weight: bold;
    }
`;