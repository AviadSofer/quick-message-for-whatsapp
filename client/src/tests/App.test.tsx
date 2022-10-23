import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { test } from 'vitest';
import App from '../App';
import { Message } from '../contexts/Message';
import Theme from '../contexts/Theme';
import { ThemeStore } from '../contexts/ThemeStore';

test('renders without crashing', () => {
  render(
    <BrowserRouter>
      <ThemeStore>
        <Theme>
          <Message>
            <App />
          </Message>
        </Theme>
      </ThemeStore>
    </BrowserRouter>,
  );
});
