import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import * as Styled from './styles/Login.styled';
import getToken from '../api/getToken';
import ErrorMessage from './styles/ErrorMessage.styled';
import Logo from './styles/Logo.styled';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPasswoed] = useState('');
  const [emptyUserNameErr, setEmptyUserNameErr] = useState(0);
  const [emptyPasswordErr, setEmptyPasswordErr] = useState(0);
  const [authErr, setAuthErr] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => { // make the height static, useful with mobile keyboard
      const viewport = (document.querySelector('meta[name=viewport]') as HTMLMetaElement);
      viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
    });
  });

  const handleSubmit = async () => {
    setAuthErr(0);
    setEmptyUserNameErr(0);
    setEmptyPasswordErr(0);
    if (!userName) setEmptyUserNameErr(+true);
    if (!password) setEmptyPasswordErr(+true);
    if (userName && password) {
      const token = await getToken({ userName, password });
      if (token) {
        localStorage.setItem('token', token);
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
        <Styled.LoginTitle>כניסה</Styled.LoginTitle>
        <Styled.ToSignUp>
          אין לך חשבון?
          {' '}
          <Styled.SignUpLink to="/signup">הרשמה</Styled.SignUpLink>
        </Styled.ToSignUp>
        <Styled.InputAndIcon>
          <Styled.AccountLogo />
          <Styled.LoginInput
            placeholder="שם משתמש"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Styled.InputAndIcon>
        <ErrorMessage showErr={emptyUserNameErr}>שדה חובה</ErrorMessage>
        <Styled.InputAndIcon>
          <Styled.KeyLogo />
          <Styled.LoginInput
            type={showPassword ? 'text' : 'password'}
            placeholder="סיסמה"
            onChange={(e) => setPasswoed(e.target.value)}
            endAdornment={(
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Styled.ShowPasswordIcon /> : <Styled.ShowPasswordOffIcon />}
              </IconButton>
            )}
          />
        </Styled.InputAndIcon>
        <ErrorMessage showErr={emptyPasswordErr}>שדה חובה</ErrorMessage>
        <ErrorMessage showErr={authErr}>שם משתמש או סיסמה שגויים ):</ErrorMessage>
        <Styled.SubmitButton green={+true} onClick={handleSubmit}>כניסה</Styled.SubmitButton>
      </Styled.LoginContainer>
    </Styled.StyledLogin>
  );
};

export default Login;
