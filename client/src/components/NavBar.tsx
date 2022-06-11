import {
  AuthButtons, Logo, Nav, NavButton, StyledLink,
} from './styles/NavBar.styled';
import logo from '../logo.png';

const NavBar: React.FC = () => (
  <Nav>
    <Logo src={logo} />
    <AuthButtons>
      <StyledLink to="/login">
        <NavButton>
          כניסה
        </NavButton>
      </StyledLink>
      <StyledLink to="/signup">
        <NavButton
          green
          variant="contained"
        >
          הרשמה
        </NavButton>
      </StyledLink>
    </AuthButtons>
  </Nav>
);

export default NavBar;
