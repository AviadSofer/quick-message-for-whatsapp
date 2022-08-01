import {
  Nav, Logo, NavButtons, NavButton,
} from './styles/NavBar.styled';
import logo from '../logo.png';

interface Props {
  handleModal: () => void
}

const LoggedNavBar: React.FC<Props> = ({ handleModal }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <Nav>
      <Logo src={logo} />
      <NavButtons>
        <NavButton onClick={handleModal}>הודעות</NavButton>
        <NavButton green={+true} onClick={handleLogout}>יציאה</NavButton>
      </NavButtons>
    </Nav>
  );
};

export default LoggedNavBar;
