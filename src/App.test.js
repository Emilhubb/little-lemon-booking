import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

test('Renders Little Lemon heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Little Lemon Restaurant/i);
  expect(headingElement).toBeInTheDocument();
});

test('Renders BookingForm labels', () => {
  render(<BookingForm />);
  const dateLabel = screen.getByText(/Choose date/i);
  expect(dateLabel).toBeInTheDocument();
});