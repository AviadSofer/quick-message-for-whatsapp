import {
  StyledLogin, LoginContainer, LoginLogo, LoginTitle, ToSignUp, LoginButton,
} from './styles/Login.styled';
import logo from '../logo.png';
import StyledInput from './styles/TextField.styled';

const Login: React.FC = () => (
  <StyledLogin>
    <LoginContainer>
      <LoginLogo src={logo} />
      <LoginTitle>כניסה</LoginTitle>
      <ToSignUp>אין לכם חשבון? הרשמה</ToSignUp>
      <StyledInput width="70%" fontSize="0.7rem" placeholder="שם משתמש" />
      <StyledInput width="70%" fontSize="0.7rem" placeholder="סיסמה" />
      <LoginButton green>כניסה</LoginButton>
    </LoginContainer>
  </StyledLogin>
);

export default Login;
