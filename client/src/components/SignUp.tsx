import { useEffect, useState } from 'react';
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
        changeErrors({ fullNameMsgErr: 'שם קצר מדי :(' });
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
        changeErrors({ mailMsgErr: 'אימייל לא תקין :(' });
      } else {
        const mailAvailable = await isMailAvailable(mail);
        if (!mailAvailable) {
          changeErrors({ mailErr: true });
          changeErrors({ mailMsgErr: 'המייל הזה תפוס כבר :(' });
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
        changeErrors({ userNameMsgErr: 'קצר מדי :( תנסו עם יותר מ5 תווים' });
      } else {
        const userNameAvailable = await isUserNameAvailable(userName);
        if (!userNameAvailable) {
          changeErrors({ userNameErr: true });
          changeErrors({ userNameMsgErr: 'שם המשתמש הזה תפוס כבר :(' });
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
        changeErrors({ pwdMsgErr: 'הסיסמה צריכה להכיל לפחות 8 תווים, אות אחת ומספר אחד :(' });
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
        changeErrors({ confirmPwdMsgErr: 'הסיסמאות לא זהות :(' });
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
        <LargeTitle>הרשמה</LargeTitle>
        <SignUpInputContainer>
          <SignUpInput
            label="שם מלא"
            error={errors.fullNameErr}
            helperText={errors.fullNameMsgErr}
            onChange={(e) => changeCredentials({ fullName: e.target.value })}
          />
          <SignUpInput
            label="שם משתמש"
            error={errors.userNameErr}
            helperText={errors.userNameMsgErr}
            onChange={(e) => changeCredentials({ userName: e.target.value })}
          />
          <SignUpInput
            gridarea="2 / 1 / 2 / 3"
            label="מייל"
            error={errors.mailErr}
            helperText={errors.mailMsgErr}
            onChange={(e) => changeCredentials({ mail: e.target.value })}
            ltr={+true}
          />
          <SignUpInput
            label="סיסמה"
            type="password"
            error={errors.pwdErr}
            helperText={errors.pwdMsgErr}
            onChange={(e) => changeCredentials({ password: e.target.value })}
          />
          <SignUpInput
            label="אימות סיסמה"
            type="password"
            error={errors.confirmPwdErr}
            helperText={errors.confirmPwdMsgErr}
            onChange={(e) => changeCredentials({ confirmPassword: e.target.value })}
          />
        </SignUpInputContainer>
        <ErrorMessage showErr={errors.authErr}>וואי, עדיין חלק מהפרטים לא נכונים</ErrorMessage>
        <SignUpButton green={+true} onClick={handleSubmit}>{!isLoading ? 'המשך' : (<LoadingButton />)}</SignUpButton>
        <SmallTitle>
          כבר יש לך חשבון?
          {' '}
          <LinkTitle to="/login">התחברות</LinkTitle>
        </SmallTitle>
      </SignUpContainer>
      <Footer />
    </StyledSignUp>
  );
};

export default SignUp;
