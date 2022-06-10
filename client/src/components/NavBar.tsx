import {
  AuthButtons, Logo, Nav, StyledLink,
} from './styles/NavBar.styled';
import logo from '../logo.png';
import { NavButton } from './styles/Button.styled';

const NavBar: React.FC = () => (
  <Nav>
    <Logo src={logo} />
    <AuthButtons>
      <StyledLink to="/login">
        <NavButton>כניסה</NavButton>
      </StyledLink>
      <StyledLink to="/signup">
        <NavButton
          variant="contained"
          bg="#7ED956"
          hoverbg="#73de45"
          font="white"
        >
          הרשמה
        </NavButton>
      </StyledLink>
    </AuthButtons>
  </Nav>
);

export default NavBar;
