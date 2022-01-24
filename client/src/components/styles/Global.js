import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        direction: rtl;
        color: ${({ theme }) => theme.colors.font};
        font-family: ${({ theme }) => theme.fonts.first};
        font-size: 1.7rem;
        @media (max-width: 768px) {
            font-size: 1.3rem;
        }
    }
`

export default GlobalStyles;
