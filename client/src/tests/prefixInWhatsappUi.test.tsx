import { fireEvent, render } from '@testing-library/react';
import { test } from 'vitest';
import App from '../App';

test('basic-usage-with-prefix', () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const inputPrefix = getByPlaceholderText('קידומת');
  expect(getByText(/972/).textContent).toContain('972');
  // expect the '972' in the whatsapp UI will change, after we will change the ptefix
  fireEvent.change(inputPrefix, { target: { value: '123' } });
  expect(getByText(/123/).textContent).toContain('123');
});
