import Logo from './styles/Logo.styled';
import {
  NavButtons, Nav, NavButton, StyledLink,
} from './styles/NavBar.styled';
import SwitchThemeButton from './SwitchThemeButton';

const HomeNavBar: React.FC = () => (
  <Nav>
    <Logo width="12%" mobilewidth="20%" />
    <NavButtons>
      <SwitchThemeButton />
      <StyledLink to="/login">
        <NavButton>כניסה</NavButton>
      </StyledLink>
      <StyledLink to="/signup">
        <NavButton green={+true}>הרשמה</NavButton>
      </StyledLink>
    </NavButtons>
  </Nav>
);

export default HomeNavBar;
