import {
  LoginContainer, StyledLogin,
} from './styles/Login.styled';
import Logo from './styles/Logo.styled';
import {
  LargeTitle, LinkTitle, SmallTitle,
} from './styles/Title.styled';
import Footer from './Footer';
import GoogleLoginButton from './GoogleLoginButton';
import HorizontalLine from './styles/HorizontalLine.styled';
import { StyledLink } from './styles/NavBar.styled';
import { ContinueButton } from './styles/SignUpChoice.styled';

const LoginChoice: React.FC = () => (
  <StyledLogin>
    <LoginContainer>
      <Logo width="7vw" mobilewidth="25vw" />
      <LargeTitle>כניסה</LargeTitle>
      <GoogleLoginButton />
      <HorizontalLine data-content="או" />
      <StyledLink to="/login">
        <ContinueButton green={+true}>המשך לכניסה</ContinueButton>
      </StyledLink>
      <SmallTitle>
        אין לך חשבון?
        {' '}
        <LinkTitle to="/signup/choice">הרשמה</LinkTitle>
      </SmallTitle>
    </LoginContainer>
    <Footer />
  </StyledLogin>
);

export default LoginChoice;
