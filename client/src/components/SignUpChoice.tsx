import Footer from './Footer';
import GoogleLoginButton from './GoogleLoginButton';
import HorizontalLine from './styles/HorizontalLine.styled';
import Logo from './styles/Logo.styled';
import { StyledLink } from './styles/NavBar.styled';
import {
  StyledSignUp,
} from './styles/SignUp.styled';
import { ContinueButton, SignUpChoiceContainer } from './styles/SignUpChoice.styled';
import { LargeTitle, LinkTitle, SmallTitle } from './styles/Title.styled';

const SignUpChoice: React.FC = () => (
  <StyledSignUp>
    <SignUpChoiceContainer>
      <Logo width="7vw" mobilewidth="25vw" />
      <LargeTitle>היי, נעים להכיר</LargeTitle>
      <GoogleLoginButton />
      <HorizontalLine data-content="או" />
      <StyledLink to="/signup">
        <ContinueButton green={+true}>המשך</ContinueButton>
      </StyledLink>
      <SmallTitle>
        כבר יש לך חשבון?
        {' '}
        <LinkTitle to="/login/choice">התחברות</LinkTitle>
      </SmallTitle>
    </SignUpChoiceContainer>
    <Footer />
  </StyledSignUp>
);

export default SignUpChoice;
