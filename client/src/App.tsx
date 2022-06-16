import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { NumberProvider } from './NumberContext';
import StyledApp from './components/styles/App.styled';
import GlobalStyles from './components/styles/Global';
import Home from './components/Home';
import MessageView from './components/MessageView';
import Login from './components/Login';
import LoggedHome from './components/LoggedHome';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setLoggedIn(true);
  }, []);
  return (
    <BrowserRouter>
      <NumberProvider>
        <StyledApp>
          <GlobalStyles />
          <Routes>
            <Route path="/login" element={!loggedIn ? <Login /> : <Navigate to="/" />} />
            <Route path="/" element={!loggedIn ? <Home /> : <LoggedHome />} />
          </Routes>
          <MessageView />
        </StyledApp>
      </NumberProvider>
    </BrowserRouter>
  );
};

export default App;
