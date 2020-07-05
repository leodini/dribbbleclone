import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }
    html, body, #root{
        height: 100%;
        width: 100vw;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }
    
`;
