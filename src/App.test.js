import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders BookingForm heading', () => {
  const availableTimes = ["17:00", "18:00"];
  const submitForm = jest.fn();
  
  render(<BookingForm availableTimes={availableTimes} submitForm={submitForm} />);
  
  const headingElement = screen.getByText(/Table Reservation/i);
  expect(headingElement).toBeInTheDocument();
});

test('Renders form fields and HTML5 validation attributes', () => {
  const availableTimes = ["17:00", "18:00"];
  const submitForm = jest.fn();
  
  render(<BookingForm availableTimes={availableTimes} submitForm={submitForm} />);
  
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('required');

  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});