/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import {
  StyledLogin, LoginContainer, LoginLogo, LoginTitle, ToSignUp, LoginInput, InputAndIcon, AccountLogo, KeyLogo, LoginButton, ErrorMessage,
} from './styles/Login.styled';
import logo from '../logo.png';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPasswoed] = useState('');
  const [showErr, setShowErr] = useState(0);

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
    const token = await getToken({ userName, password });
    if (token) {
      localStorage.setItem('token', token);
      window.location.href = '/';
    } else {
      setShowErr(+true);
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
        <InputAndIcon>
          <KeyLogo />
          <LoginInput type="password" placeholder="סיסמה" onChange={(e) => setPasswoed(e.target.value)} />
        </InputAndIcon>
        <ErrorMessage showErr={showErr}>שם משתמש או סיסמה שגויים ):</ErrorMessage>
        <LoginButton green={+true} onClick={() => handleSubmit()}>כניסה</LoginButton>
      </LoginContainer>
    </StyledLogin>
  );
};

export default Login;
