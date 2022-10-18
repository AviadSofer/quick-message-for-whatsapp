import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import createUser from '../api/createUser';
import { isMailAvailable, isUserNameAvailable } from '../api/isCredentialsAvailable';
import getCookie from '../helpers/getCookie';
import Footer from './Footer';
import { LoadingButton } from './styles/Button.styled';
import ErrorMessage from './styles/ErrorMessage.styled';
import Logo from './styles/Logo.styled';
import {
  StyledSignUp, SignUpContainer, SignUpInputContainer, SignUpInput, SignUpButton,
} from './styles/SignUp.styled';
import { LargeTitle, LinkTitle, SmallTitle } from './styles/Title.styled';

const SignUp: React.FC = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const [credentials, setCredentials] = useState({
    fullName: '',
    mail: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const {
    fullName, mail, userName, password, confirmPassword,
  } = credentials;

  const [errors, setErrors] = useState({
    authErr: 0,
    fullNameErr: false,
    fullNameMsgErr: '',
    mailErr: false,
    mailMsgErr: '',
    userNameErr: false,
    userNameMsgErr: '',
    pwdErr: false,
    pwdMsgErr: '',
    confirmPwdErr: false,
    confirmPwdMsgErr: '',
  });

  const {
    fullNameErr, mailErr, userNameErr, pwdErr, confirmPwdErr,
  } = errors;

  const changeCredentials = (newCredential: { [key: string]: string }) => {
    setCredentials((state) => ({
      ...state,
      ...newCredential,
    }));
  };

  const changeErrors = (newError: { [key: string]: string | boolean | number }) => {
    setErrors((state) => ({
      ...state,
      ...newError,
    }));
  };

  useEffect(() => {
    const validateFullName = () => {
      if (fullName.length > 0 && fullName.length < 6) {
        changeErrors({ fullNameErr: true });
        changeErrors({ fullNameMsgErr: t('errors.tooShortName') });
      } else {
        changeErrors({ fullNameErr: false });
        changeErrors({ fullNameMsgErr: '' });
      }
    };
    validateFullName();
  }, [fullName]);

  useEffect(() => {
    const validateMail = async () => {
      if (mail.length > 0 && !/\S+@\S+\.\S+/.test(mail)) {
        changeErrors({ mailErr: true });
        changeErrors({ mailMsgErr: t('errors.invalidEmail') });
      } else {
        const mailAvailable = await isMailAvailable(mail);
        if (!mailAvailable) {
          changeErrors({ mailErr: true });
          changeErrors({ mailMsgErr: t('errors.emailAlreadyExist') });
        } else {
          setErrors((state) => ({ ...state, mailErr: false, mailMsgErr: '' }));
          changeErrors({ mailErr: false });
          changeErrors({ mailMsgErr: '' });
        }
      }
    };
    validateMail();
  }, [mail]);

  useEffect(() => {
    const validateUserName = async () => {
      if (userName.length > 0 && userName.length < 5) {
        changeErrors({ userNameErr: true });
        changeErrors({ userNameMsgErr: t('errors.tooShortUsername') });
      } else {
        const userNameAvailable = await isUserNameAvailable(userName);
        if (!userNameAvailable) {
          changeErrors({ userNameErr: true });
          changeErrors({ userNameMsgErr: t('errors.usernameAlreadyExist') });
        } else {
          setErrors((state) => ({ ...state, userNameErr: false, userNameMsgErr: '' }));
          changeErrors({ userNameErr: false });
          changeErrors({ userNameMsgErr: '' });
        }
      }
    };
    validateUserName();
  }, [userName]);

  useEffect(() => {
    const validatePassword = () => {
      if (password.length > 0 && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        changeErrors({ pwdErr: true });
        changeErrors({ pwdMsgErr: t('errors.invalidPassword') });
      } else {
        changeErrors({ pwdErr: false });
        changeErrors({ pwdMsgErr: '' });
      }
    };
    validatePassword();
  }, [password]);

  useEffect(() => {
    const validateConfirmPassword = () => {
      if (confirmPassword.length > 0 && confirmPassword !== password) {
        changeErrors({ confirmPwdErr: true });
        changeErrors({ confirmPwdMsgErr: t('errors.confirmPasswordErr') });
      } else {
        changeErrors({ confirmPwdErr: false });
        changeErrors({ confirmPwdMsgErr: '' });
      }
    };
    validateConfirmPassword();
  }, [confirmPassword]);

  const handleSubmit = async () => {
    if (
      fullName
      && mail
      && userName
      && password
      && confirmPassword
      && !fullNameErr
      && !mailErr
      && !userNameErr
      && !pwdErr
      && !confirmPwdErr
    ) {
      setIsLoading(true);
      await createUser(credentials);
      const checkToken = getCookie('checkToken');
      if (checkToken) {
        window.location.href = '/';
        setIsLoading(false);
      } else {
        setIsLoading(false);
        changeErrors({ authErr: +true });
      }
    } else {
      changeErrors({ authErr: +true });
    }
  };

  return (
    <StyledSignUp>
      <SignUpContainer>
        <Logo width="7vw" mobilewidth="20vw" />
        <LargeTitle>{t('SignUp.signup')}</LargeTitle>
        <SignUpInputContainer>
          <SignUpInput
            label={t('labels.fullName')}
            error={errors.fullNameErr}
            helperText={errors.fullNameMsgErr}
            onChange={(e) => changeCredentials({ fullName: e.target.value })}
          />
          <SignUpInput
            label={t('labels.username')}
            error={errors.userNameErr}
            helperText={errors.userNameMsgErr}
            onChange={(e) => changeCredentials({ userName: e.target.value })}
          />
          <SignUpInput
            gridarea="2 / 1 / 2 / 3"
            label={t('labels.email')}
            error={errors.mailErr}
            helperText={errors.mailMsgErr}
            onChange={(e) => changeCredentials({ mail: e.target.value })}
            ltr={+true}
          />
          <SignUpInput
            label={t('labels.password')}
            type="password"
            error={errors.pwdErr}
            helperText={errors.pwdMsgErr}
            onChange={(e) => changeCredentials({ password: e.target.value })}
          />
          <SignUpInput
            label={t('labels.confirmPassword')}
            type="password"
            error={errors.confirmPwdErr}
            helperText={errors.confirmPwdMsgErr}
            onChange={(e) => changeCredentials({ confirmPassword: e.target.value })}
          />
        </SignUpInputContainer>
        <ErrorMessage showErr={errors.authErr}>{t('errors.stillSomeDetailsWrong')}</ErrorMessage>
        <SignUpButton green={+true} onClick={handleSubmit}>{!isLoading ? t('buttons.continue') : (<LoadingButton />)}</SignUpButton>
        <SmallTitle>
          {t('SignUp.alreadyHaveAnAccount')}
          {' '}
          <LinkTitle to="/login">{t('SignUp.signIn')}</LinkTitle>
        </SmallTitle>
      </SignUpContainer>
      <Footer />
    </StyledSignUp>
  );
};

export default SignUp;
