/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import {
  StyledLogin, LoginContainer, LoginLogo, LoginTitle, ToSignUp, LoginInput, InputAndIcon, AccountLogo, KeyLogo, ErrorMessage, SubmitButton,
} from './styles/Login.styled';
import logo from '../logo.png';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPasswoed] = useState('');
  const [emptyUserNameErr, setEmptyUserNameErr] = useState(0);
  const [emptyPasswordErr, setEmptyPasswordErr] = useState(0);
  const [authErr, setAuthErr] = useState(0);

  useEffect(() => {
    window.addEventListener('load', () => { // make the height static, useful with mobile keyboard
      const viewport = (document.querySelector('meta[name=viewport]') as HTMLMetaElement);
      viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
    });
  });

  const getToken = async (credentials: {userName: string, password: string}) => fetch('/api/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
    .then((data) => data.token);

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
    <StyledLogin>
      <LoginContainer>
        <LoginLogo src={logo} />
        <LoginTitle>כניסה</LoginTitle>
        <ToSignUp>אין לכם חשבון? הרשמה</ToSignUp>
        <InputAndIcon>
          <AccountLogo />
          <LoginInput placeholder="שם משתמש" onChange={(e) => setUserName(e.target.value)} />
        </InputAndIcon>
        <ErrorMessage showErr={emptyUserNameErr}>שדה חובה</ErrorMessage>
        <InputAndIcon>
          <KeyLogo />
          <LoginInput type="password" placeholder="סיסמה" onChange={(e) => setPasswoed(e.target.value)} />
        </InputAndIcon>
        <ErrorMessage showErr={emptyPasswordErr}>שדה חובה</ErrorMessage>
        <ErrorMessage showErr={authErr}>שם משתמש או סיסמה שגויים ):</ErrorMessage>
        <SubmitButton green={+true} onClick={() => handleSubmit()}>כניסה</SubmitButton>
      </LoginContainer>
    </StyledLogin>
  );
};

export default Login;
