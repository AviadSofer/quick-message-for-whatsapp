import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from './Button.styled';

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Logo = styled.img`
width: 12%;
object-fit: contain;
@media (max-width: 768px) {
    width: 20%;
}
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
  font-size: 0.75rem;
}
`;
