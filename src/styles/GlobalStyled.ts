import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root{
        
        --color-black: #000;
        --secondary: #3D3D3D;
        --color-white: #fff;
        --color-grey: #dee2e6;
        --lightgray: #EFF0F2;
        --lightgray2:#9A9A9A;
        --background: #F4ECE2;
        --lightred: #E6CEBC;
        --brand-green: #687259;
        --brand-green-2: #25330F;
        
    }

    button{
        cursor: pointer;
    }

    body{
        background-color: var(--background);
        font-family: 'Montserrat', sans-serif;
    }

    button, input, select, textarea, option{
        font-family: 'Montserrat', sans-serif;
        outline: none;
        border: none;
    }
    
`;
