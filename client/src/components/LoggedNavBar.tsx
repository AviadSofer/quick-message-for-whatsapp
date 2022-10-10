import { GoogleLogout } from 'react-google-login';
import logout from '../api/logout';
import getCookie from '../helpers/getCookie';
import Logo from './styles/Logo.styled';
import {
  Nav, NavButtons, NavButton,
} from './styles/NavBar.styled';
import SwitchThemeButton from './SwitchThemeButton';

interface Props {
  handleModal: () => void
}

const LoggedNavBar: React.FC<Props> = ({ handleModal }) => {
  const clientId = '27378581193-0oui5pt2qm345p1u41gpim0gbnvsm5jm.apps.googleusercontent.com';

  const handleLogout = async () => {
    await logout();
    document.cookie = 'checkToken=; Max-Age=0';
    document.cookie = 'isGoogleAuth=; Max-Age=0';
    window.location.href = '/';
  };

  return (
    <Nav>
      <Logo width="12%" mobilewidth="20%" />
      <NavButtons>
        <SwitchThemeButton />
        <NavButton onClick={handleModal}>הודעות</NavButton>
        {!getCookie('isGoogleAuth')
          ? <NavButton green={+true} onClick={handleLogout}>יציאה</NavButton>
          : (
            <GoogleLogout
              clientId={clientId}
              onLogoutSuccess={handleLogout}
              render={(renderProps) => (
                <NavButton
                  green={+true}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  יציאה
                </NavButton>
              )}
            />
          )}
      </NavButtons>
    </Nav>
  );
};

export default LoggedNavBar;
