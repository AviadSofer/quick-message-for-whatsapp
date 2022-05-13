import { AuthButtons, Logo, Nav } from './styles/NavBar.styled';
import logo from '../logo.png';
import { NavButton } from './styles/Button.styled';

const NavBar: React.FC = () => (
  <Nav>
    <Logo src={logo} />
    <AuthButtons>
      <NavButton>כניסה</NavButton>
      <NavButton
        variant="contained"
        bg="#7ED956"
        hoverbg="#73de45"
        font="white"
      >
        הרשמה
      </NavButton>
    </AuthButtons>
  </Nav>
);

export default NavBar;
