import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Message } from './contexts/Message';
import StyledApp from './components/styles/App.styled';
import Home from './components/Home';
import Login from './components/Login';
import LoggedHome from './components/LoggedHome';
import SignUp from './components/SignUp';
import getCookie from './helpers/getCookie';
import { ThemeStore } from './contexts/ThemeStore';
import Theme from './contexts/Theme';
import SignUpChoice from './components/SignUpChoice';
import LoginChoice from './components/LoginChoice';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => { // make the height static, useful with mobile keyboard
    window.addEventListener('load', () => {
      const viewport = (document.querySelector('meta[name=viewport]') as HTMLMetaElement);
      viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
    });
  }, []);

  useEffect(() => {
    const checkToken = getCookie('checkToken');
    if (checkToken) setLoggedIn(true);
  }, []);

  useEffect(() => {
    document.body.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
    document.title = t('title');
  });

  return (
    <BrowserRouter>
      <ThemeStore>
        <Theme>
          <Message>
            <StyledApp>
              <Routes>
                <Route path="/login/choice" element={!loggedIn ? <LoginChoice /> : <Navigate to="/" />} />
                <Route path="/login" element={!loggedIn ? <Login /> : <Navigate to="/" />} />

                <Route path="/signup/choice" element={!loggedIn ? <SignUpChoice /> : <Navigate to="/" />} />
                <Route path="/signup" element={!loggedIn ? <SignUp /> : <Navigate to="/" />} />

                <Route path="/" element={!loggedIn ? <Home /> : <LoggedHome />} />
              </Routes>
            </StyledApp>
          </Message>
        </Theme>
      </ThemeStore>
    </BrowserRouter>
  );
};

export default App;
