import { useTranslation } from 'react-i18next';
import Logo from './styles/Logo.styled';
import {
  NavButtons, Nav, NavButton, StyledLink,
} from './styles/NavBar.styled';
import SwitchLanguage from './SwitchLanguage';
import SwitchTheme from './SwitchTheme';

const HomeNavBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Nav>
      <Logo width="12%" mobilewidth="20%" />
      <NavButtons>
        <SwitchLanguage />
        <SwitchTheme />
        <StyledLink to="/login/choice">
          <NavButton>{t('buttons.login')}</NavButton>
        </StyledLink>
        <StyledLink to="/signup/choice">
          <NavButton green={+true}>{t('buttons.signup')}</NavButton>
        </StyledLink>
      </NavButtons>
    </Nav>
  );
};

export default HomeNavBar;
