import logout from '../api/logout';
import Logo from './styles/Logo.styled';
import {
  Nav, NavButtons, NavButton,
} from './styles/NavBar.styled';
import SwitchThemeButton from './SwitchThemeButton';

interface Props {
  handleModal: () => void
}

const LoggedNavBar: React.FC<Props> = ({ handleModal }) => {
  const handleLogout = async () => {
    await logout();
    document.cookie = 'checkToken=; Max-Age=0';
    window.location.href = '/';
  };

  return (
    <Nav>
      <Logo width="12%" mobilewidth="20%" />
      <NavButtons>
        <SwitchThemeButton />
        <NavButton onClick={handleModal}>הודעות</NavButton>
        <NavButton green={+true} onClick={handleLogout}>יציאה</NavButton>
      </NavButtons>
    </Nav>
  );
};

export default LoggedNavBar;
