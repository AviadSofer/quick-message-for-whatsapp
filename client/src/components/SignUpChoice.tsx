import { useTranslation } from 'react-i18next';
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

const SignUpChoice: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledSignUp>
      <SignUpChoiceContainer>
        <Logo width="7vw" mobilewidth="25vw" />
        <LargeTitle>{t('SignUp.niceToMeet')}</LargeTitle>
        <GoogleLoginButton />
        <HorizontalLine data-content={t('SignUp.or')} />
        <StyledLink to="/signup">
          <ContinueButton green={+true}>{t('buttons.continue')}</ContinueButton>
        </StyledLink>
        <SmallTitle>
          {t('SignUp.alreadyHaveAnAccount')}
          {' '}
          <LinkTitle to="/login/choice">{t('SignUp.signIn')}</LinkTitle>
        </SmallTitle>
      </SignUpChoiceContainer>
      <Footer />
    </StyledSignUp>
  );
};

export default SignUpChoice;
