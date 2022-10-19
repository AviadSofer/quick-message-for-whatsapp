import { fireEvent, render } from '@testing-library/react';
import { test } from 'vitest';
import App from '../App';

test('the prefix in whatsapp UI should change to 123', () => {
  const { getByText, getByLabelText } = render(<App />);

  // expect the '972' in the whatsapp UI will change, after we will change the ptefix
  expect(getByText(/972/).textContent).toContain('972');
  fireEvent.change(getByLabelText('labels.prefix'), { target: { value: '321' } });
  expect(getByText(/321/).textContent).toContain('321');
});
