import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NumberProvider } from './NumberContext';
import StyledApp from './components/styles/App.styled';
import GlobalStyles from './components/styles/Global';
import Container from './components/Container';
import MessageView from './components/MessageView';
import Login from './components/Login';

const App: React.FC = () => (
  <BrowserRouter>
    <NumberProvider>
      <StyledApp>
        <GlobalStyles />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Container />} />
        </Routes>
        <MessageView />
      </StyledApp>
    </NumberProvider>
  </BrowserRouter>
);

export default App;
