import Logo from './styles/Logo.styled';
import {
  Nav, NavButtons, NavButton,
} from './styles/NavBar.styled';

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
      <Logo width="12%" mobilewidth="20%" />
      <NavButtons>
        <NavButton onClick={handleModal}>הודעות</NavButton>
        <NavButton green={+true} onClick={handleLogout}>יציאה</NavButton>
      </NavButtons>
    </Nav>
  );
};

export default LoggedNavBar;
