import { expect, it, afterEach } from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

it('Context value is updated by child component', () => {
  const { getByText } = render(<App />);
  expect(getByText(/972/).textContent).toContain('972');
  // fireEvent.click(getByText('Change Text'));
  // expect(getByText(/Some/i).textContent).toBe('Some Other Text');
});
