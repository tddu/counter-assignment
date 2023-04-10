import { fireEvent, render, screen } from '@testing-library/react';
import App from '../components/App';
import Counter from '../components/Counter.js';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCounter = screen.getByText(/0/i)
  expect(initialCounter).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const currentCounter = screen.getByText(/0/i);
  const buttonToCheck = screen.getByText(/\+/);
  fireEvent.click(buttonToCheck);
  expect(currentCounter).toHaveTextContent(/1/i);
});

test('clicking - decrements the count', () => {
  const currentCounter = screen.getByText(/0/i);
  const buttonToCheck = screen.getByText(/\-/i);
  fireEvent.click(buttonToCheck);
  expect(currentCounter).toHaveTextContent(/-1/i)
});
