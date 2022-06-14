import {
  AuthButtons, Logo, Nav, NavButton, StyledLink,
} from './styles/NavBar.styled';
import logo from '../logo.png';

const LoggedNavBar: React.FC = () => (
  <Nav>
    <Logo src={logo} />
    <AuthButtons>
      <StyledLink to="/signup">
        <NavButton green={+true}>יציאה</NavButton>
      </StyledLink>
    </AuthButtons>
  </Nav>
);

export default LoggedNavBar;
