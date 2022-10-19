import WhatsappUi from 'react-whatsapp-styled-ui';
import styled from 'styled-components';

export const StyledMessageView = styled.div`
height: 100vh;
display: flex;
flex: 1;
background: ${({ theme }) => theme.backgrounds.leftSide};
box-shadow:  ${({ theme }) => (!theme.isDarkMode
    ? ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)'
    : 'none'
  )};

@media (max-width: 768px) {
    display: none;
}
`;

export const EnglishWhatsappUi = styled(WhatsappUi)``;
