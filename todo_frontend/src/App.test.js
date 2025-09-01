import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders header title Tasks', () => {
  render(<App />);
  const title = screen.getByText(/Tasks/i);
  expect(title).toBeInTheDocument();
});
