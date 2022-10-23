import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Message } from './contexts/Message';
import Theme from './contexts/Theme';
import { ThemeStore } from './contexts/ThemeStore';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeStore>
        <Theme>
          <Message>
            <App />
          </Message>
        </Theme>
      </ThemeStore>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
