import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    color: ${({ theme }) => theme.fonts.text};
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
    
body {
    background-color: ${({ theme }) => theme.backgrounds.primary};
    margin: 0;
} 
`;

export default GlobalStyles;
