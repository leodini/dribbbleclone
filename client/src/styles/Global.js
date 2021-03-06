import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
    a{
        text-decoration: none;
        color: #000;
    }

    :root{
        --primary: #ea4c89;
        --primary-hover: #f082ac;
    }
    
`;
