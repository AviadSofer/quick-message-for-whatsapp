import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from './Button.styled';

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const NavButtons = styled.div`
display: flex;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
`;

export const NavButton = styled(StyledButton)`
&& {
  width: 7vw;
  margin: 0px 6px 0px 6px;
  font-size: ${({ theme }) => ((theme.i18n.dir() === 'rtl') ? '0.75rem' : '0.7rem')};

  @media (max-width: 768px) {
    width: ${({ theme }) => ((theme.i18n.dir() === 'rtl') ? '7vw' : '20vw')};
  }
}
`;
