import { useState } from 'react';
import { IconButton } from '@mui/material';
import * as Styled from './styles/Login.styled';
import getToken from '../api/getToken';
import ErrorMessage from './styles/ErrorMessage.styled';
import Logo from './styles/Logo.styled';
import { LargeTitle, LinkTitle, SmallTitle } from './styles/Title.styled';
import getCookie from '../helpers/getCookie';
import Footer from './Footer';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPasswoed] = useState('');
  const [emptyUserNameErr, setEmptyUserNameErr] = useState(0);
  const [emptyPasswordErr, setEmptyPasswordErr] = useState(0);
  const [authErr, setAuthErr] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    setAuthErr(0);
    setEmptyUserNameErr(0);
    setEmptyPasswordErr(0);
    if (!userName) setEmptyUserNameErr(+true);
    if (!password) setEmptyPasswordErr(+true);
    if (userName && password) {
      await getToken({ userName, password });
      const checkToken = getCookie('checkToken');
      if (checkToken) {
        window.location.href = '/';
      } else {
        setAuthErr(+true);
      }
    }
  };
  return (
    <Styled.StyledLogin>
      <Styled.LoginContainer>
        <Logo width="7vw" mobilewidth="20vw" />
        <LargeTitle>כניסה</LargeTitle>
        <SmallTitle>
          אין לך חשבון?
          {' '}
          <LinkTitle to="/signup">הרשמה</LinkTitle>
        </SmallTitle>
        <Styled.InputAndIcon>
          <Styled.AccountLogo />
          <Styled.LoginInput
            label="שם משתמש"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Styled.InputAndIcon>
        <ErrorMessage showErr={emptyUserNameErr}>שדה חובה</ErrorMessage>
        <Styled.InputAndIcon>
          <Styled.KeyLogo />
          <Styled.LoginInput
            type={showPassword ? 'text' : 'password'}
            label="סיסמה"
            onChange={(e) => setPasswoed(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Styled.ShowPasswordIcon /> : <Styled.ShowPasswordOffIcon />}
                </IconButton>
              ),
            }}
          />
        </Styled.InputAndIcon>
        <ErrorMessage showErr={emptyPasswordErr}>שדה חובה</ErrorMessage>
        <ErrorMessage showErr={authErr}>שם משתמש או סיסמה שגויים ):</ErrorMessage>
        <Styled.SubmitButton green={+true} onClick={handleSubmit}>כניסה</Styled.SubmitButton>
      </Styled.LoginContainer>
      <Footer />
    </Styled.StyledLogin>
  );
};

export default Login;
