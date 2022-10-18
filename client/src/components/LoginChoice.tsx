import { useTranslation } from 'react-i18next';
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

const LoginChoice: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledLogin>
      <LoginContainer>
        <Logo width="7vw" mobilewidth="25vw" />
        <LargeTitle>{t('Login.login')}</LargeTitle>
        <GoogleLoginButton />
        <HorizontalLine data-content={t('Login.or')} />
        <StyledLink to="/login">
          <ContinueButton green={+true}>{t('buttons.continueForLogin')}</ContinueButton>
        </StyledLink>
        <SmallTitle>
          {t('Login.youHaveNoAccount')}
          {' '}
          <LinkTitle to="/signup/choice">
            {t('Login.signup')}
          </LinkTitle>
        </SmallTitle>
      </LoginContainer>
      <Footer />
    </StyledLogin>
  );
};

export default LoginChoice;
