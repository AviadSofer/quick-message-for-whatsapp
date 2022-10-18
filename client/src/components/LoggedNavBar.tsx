import { GoogleLogout } from 'react-google-login';
import { useTranslation } from 'react-i18next';
import logout from '../api/logout';
import getCookie from '../helpers/getCookie';
import googleAuth from '../static/googleAuth';
import Logo from './styles/Logo.styled';
import {
  Nav, NavButtons, NavButton,
} from './styles/NavBar.styled';
import SwitchLanguage from './SwitchLanguage';
import SwitchTheme from './SwitchTheme';

interface Props {
  handleModal: () => void
}

const LoggedNavBar: React.FC<Props> = ({ handleModal }) => {
  const { t } = useTranslation();

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
        <SwitchLanguage />
        <SwitchTheme />
        <NavButton onClick={handleModal}>
          {t('buttons.messages')}
        </NavButton>
        {!getCookie('isGoogleAuth')
          ? (
            <NavButton
              green={+true}
              onClick={handleLogout}
            >
              {t('buttons.signOut')}
            </NavButton>
          )
          : (
            <GoogleLogout
              clientId={googleAuth.clientId}
              onLogoutSuccess={handleLogout}
              render={(renderProps) => (
                <NavButton
                  green={+true}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  {t('buttons.signOut')}
                </NavButton>
              )}
            />
          )}
      </NavButtons>
    </Nav>
  );
};

export default LoggedNavBar;
