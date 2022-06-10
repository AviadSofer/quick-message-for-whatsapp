import {
  AuthButtons, Logo, Nav, StyledLink,
} from './styles/NavBar.styled';
import logo from '../logo.png';
import StyledButton from './styles/Button.styled';

const NavBar: React.FC = () => (
  <Nav>
    <Logo src={logo} />
    <AuthButtons>
      <StyledLink to="/login">
        <StyledButton
          width="7vw"
          fontSize="0.75rem"
          margin="0px 6px 0px 6px"
        >
          כניסה
        </StyledButton>
      </StyledLink>
      <StyledLink to="/signup">
        <StyledButton
          green
          variant="contained"
          width="7vw"
          fontSize="0.75rem"
          margin="0px 6px 0px 6px"
        >
          הרשמה
        </StyledButton>
      </StyledLink>
    </AuthButtons>
  </Nav>
);

export default NavBar;
