import {
  expect, afterEach, vi, it,
} from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { ThemeStore } from '../contexts/ThemeStore';
import Theme from '../contexts/Theme';
import { Message } from '../contexts/Message';

afterEach(cleanup);

const prefix = '972';
const phone = '541234567';
const msg = 'Hi!';

it('should open the right link', () => {
  // render the app into this test
  const { getByText, getByLabelText } = render(
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

  // input value in all 3 text fields
  fireEvent.change(getByLabelText('labels.prefix'), { target: { value: prefix } });
  fireEvent.change(getByLabelText('labels.phone'), { target: { value: phone } });
  fireEvent.change(getByLabelText('labels.textMessage'), { target: { value: msg } });

  window.open = vi.fn();

  // click on 'send' button
  fireEvent.click(getByText('buttons.send'));

  // expect: open the correct whatsapp link in new tab
  expect(window.open).toBeCalledWith(`https://wa.me/${prefix}${phone}?text=${msg}`, '_blank');
});
