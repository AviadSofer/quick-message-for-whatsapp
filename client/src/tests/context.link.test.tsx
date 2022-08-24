import {
  expect, afterEach, vi, it,
} from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

const prefix = '972';
const phone = '541234567';
const msg = 'Hi!';

it('should open the right link', () => {
  // render the app into this test
  const { getByText, getByLabelText } = render(<App />);

  // input value in all 3 text fields
  fireEvent.change(getByLabelText('קידומת'), { target: { value: prefix } });
  fireEvent.change(getByLabelText('מספר טלפון'), { target: { value: phone } });
  fireEvent.change(getByLabelText('ההודעה שלך (לא חובה)'), { target: { value: msg } });

  window.open = vi.fn();

  // click on 'send' button
  fireEvent.click(getByText('שלח'));

  // expect: open the correct whatsapp link in new tab
  expect(window.open).toBeCalledWith(`https://wa.me/${prefix}${phone}?text=${msg}`, '_blank');
});
