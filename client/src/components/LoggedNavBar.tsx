import {
  AuthButtons, Logo, Nav, NavButton,
} from './styles/NavBar.styled';
import logo from '../logo.png';

const LoggedNavBar: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <Nav>
      <Logo src={logo} />
      <AuthButtons>
        <NavButton green={+true} onClick={handleLogout}>יציאה</NavButton>
      </AuthButtons>
    </Nav>
  );
};

export default LoggedNavBar;
