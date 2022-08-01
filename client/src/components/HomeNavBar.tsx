import {
  NavButtons, Logo, Nav, NavButton, StyledLink,
} from './styles/NavBar.styled';
import logo from '../logo.png';

const NavBar: React.FC = () => (
  <Nav>
    <Logo src={logo} />
    <NavButtons>
      <StyledLink to="/login">
        <NavButton>כניסה</NavButton>
      </StyledLink>
      <StyledLink to="/signup">
        <NavButton green={+true}>הרשמה</NavButton>
      </StyledLink>
    </NavButtons>
  </Nav>
);

export default NavBar;
