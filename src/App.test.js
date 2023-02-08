import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello world text and link to React', () => {
  const { getByText } = render(<App />);
  const helloWorld = getByText(/Hello World!/i);
  const author = getByText(/This is Hardik Chalke/i);
  const link = getByText(/Learn React/i);

  expect(helloWorld).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(link).toBeInTheDocument();

  expect(link.href).toBe('https://reactjs.org/');
  expect(link.target).toBe('_blank');
  expect(link.rel).toBe('noopener noreferrer');
});
