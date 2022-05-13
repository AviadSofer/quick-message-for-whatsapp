import { Link } from 'react-router-dom';
import { AuthButtons, Logo, Nav } from './styles/NavBar.styled';
import logo from '../logo.png';
import { NavButton } from './styles/Button.styled';

const NavBar: React.FC = () => (
  <Nav>
    <Logo src={logo} />
    <AuthButtons>
      <Link to="/login">
        <NavButton>כניסה</NavButton>
      </Link>
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
