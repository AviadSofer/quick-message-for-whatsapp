import Logo from './styles/Logo.styled';
import {
  NavButtons, Nav, NavButton, StyledLink,
} from './styles/NavBar.styled';
import SwitchButton from './SwitchButton';

const HomeNavBar: React.FC = () => (
  <Nav>
    <Logo width="12%" mobilewidth="20%" />
    <NavButtons>
      <SwitchButton />
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
