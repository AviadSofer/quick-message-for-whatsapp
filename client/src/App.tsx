import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { NumberProvider } from './NumberContext';
import StyledApp from './components/styles/App.styled';
import GlobalStyles from './components/styles/Global';
import Home from './components/Home';
import MessageView from './components/MessageView';
import Login from './components/Login';
import LoggedHome from './components/LoggedHome';
import SignUp from './components/SignUp';
import getCookie from './helpers/getCookie';
import theme from './static/theme';

const App: React.FC = () => {
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

  return (
    <BrowserRouter>
      <NumberProvider>
        <ThemeProvider theme={theme}>
          <StyledApp>
            <GlobalStyles />
            <Routes>
              <Route path="/login" element={!loggedIn ? <Login /> : <Navigate to="/" />} />
              <Route path="/signup" element={!loggedIn ? <SignUp /> : <Navigate to="/" />} />
              <Route path="/" element={!loggedIn ? <Home /> : <LoggedHome />} />
            </Routes>
            <MessageView />
          </StyledApp>
        </ThemeProvider>
      </NumberProvider>
    </BrowserRouter>
  );
};

export default App;
