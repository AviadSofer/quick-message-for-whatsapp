import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export const AuthButtons = styled.div`
display: flex;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
`;
