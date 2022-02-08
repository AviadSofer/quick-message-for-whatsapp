import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        direction: rtl;
        color: gray;
        font-family: Secular One, sans-serif;
        font-size: 1.7rem;
        ::selection { /*design the selected text*/
            color: white;
            background: #00cc66;
        }
        @media (max-width: 768px) {
            font-size: 1.3rem;
        }
    }
`

export default GlobalStyles;
