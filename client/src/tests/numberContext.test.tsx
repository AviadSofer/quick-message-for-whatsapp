import {
  expect, afterEach, vi, it,
} from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

const prefix = '972';
const phone = '541234567';
const msg = 'Hi!';

it('should return right link', () => {
  // render the app into this test
  const { getByText, getByPlaceholderText } = render(<App />);

  // input value in all 3 text fields
  fireEvent.change(getByPlaceholderText('קידומת'), { target: { value: prefix } });
  fireEvent.change(getByPlaceholderText('מספר טלפון'), { target: { value: phone } });
  fireEvent.change(getByPlaceholderText('הודעה'), { target: { value: msg } });

  window.open = vi.fn();

  // click on 'send' button
  fireEvent.click(getByText('שלח'));

  // expect: open the correct whatsapp link in new tab
  expect(window.open).toBeCalledWith(`https://wa.me/${prefix}${phone}?text=${msg}`, '_blank');
});
