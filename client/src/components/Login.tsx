import {
  StyledLogin, LoginContainer, LoginLogo, LoginTitle, ToSignUp, LoginButton, LoginInput, InputAndIcon, AccountLogo, KeyLogo,
} from './styles/Login.styled';
import logo from '../logo.png';

const Login: React.FC = () => (
  <StyledLogin>
    <LoginContainer>
      <LoginLogo src={logo} />
      <LoginTitle>כניסה</LoginTitle>
      <ToSignUp>אין לכם חשבון? הרשמה</ToSignUp>
      <InputAndIcon>
        <AccountLogo />
        <LoginInput placeholder="שם משתמש" />
      </InputAndIcon>
      <InputAndIcon>
        <KeyLogo />
        <LoginInput type="password" placeholder="סיסמה" />
      </InputAndIcon>
      <LoginButton green>כניסה</LoginButton>
    </LoginContainer>
  </StyledLogin>
);

export default Login;
