import React, { useEffect, useState } from 'react';
import {
  Route, Routes, Navigate,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StyledApp from './components/styles/App.styled';
import Home from './components/Home';
import MessageView from './components/MessageView';
import Login from './components/Login';
import LoggedHome from './components/LoggedHome';
import SignUp from './components/SignUp';
import getCookie from './helpers/getCookie';
import { useThemeStore } from './contexts/ThemeStore';
import SignUpChoice from './components/SignUpChoice';
import LoginChoice from './components/LoginChoice';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const { isDarkMode, switchTheme } = useThemeStore();

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
    const localIsDarkMode = localStorage.getItem('isDarkMode');
    if (localIsDarkMode && !isDarkMode) switchTheme();
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t('title');
    if (i18n.language === 'he') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
  });

  return (
    <StyledApp>
      <Routes>
        <Route path="/login/choice" element={!loggedIn ? <LoginChoice /> : <Navigate to="/" />} />
        <Route path="/login" element={!loggedIn ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup/choice" element={!loggedIn ? <SignUpChoice /> : <Navigate to="/" />} />
        <Route path="/signup" element={!loggedIn ? <SignUp /> : <Navigate to="/" />} />
        <Route path="/" element={!loggedIn ? <Home /> : <LoggedHome />} />
      </Routes>
      <MessageView />
    </StyledApp>
  );
};

export default App;
