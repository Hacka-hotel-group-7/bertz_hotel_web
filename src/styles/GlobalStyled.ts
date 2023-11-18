import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root{
        
        --color-black: #000;
        --color-white: #fff;
        --color-grey: #dee2e6;
        --background: #F4ECE2;
        
    }
    button{
        cursor: pointer;
    }
`;
