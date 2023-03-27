/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import BookingForm from './BookingForm';
import userEvent from '@testing-library/user-event';
import { initializeTimes } from 'App';

describe('BookingForm', () => {
  test('renders BookingForm component', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Book Now');
    expect(headingElement).toBeInTheDocument();
  });

  test('submit form in BookingForm', async () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    const availableTimes = initializeTimes();
    render(<BookingForm handleSubmit={handleSubmit} availableTimes={availableTimes} />);
    const dinnersInput = screen.getByRole('spinbutton', { name: /number of dinners/i });
    const date = screen.getByText(/date/i);
    const time = screen.getByRole('combobox', { name: /time/i });
    const firstName = screen.getByRole('textbox', { name: /first name/i });
    const lastName = screen.getByRole('textbox', { name: /last name/i });
    const phoneNumber = screen.getByRole('textbox', { name: /phone number/i });
    const comments = screen.getByRole('textbox', { name: /comments/i });
    const occasion = screen.getByRole('combobox', { name: /occasion/i });
    act(() => userEvent.type(dinnersInput, '2'));
    act(() => userEvent.type(date, '2023-03-14'));
    act(() => userEvent.selectOptions(time, availableTimes[2]));
    act(() => userEvent.type(firstName, 'John'));
    act(() => userEvent.type(lastName, 'Doe'));
    act(() => userEvent.type(phoneNumber, '1234567890'));
    act(() => userEvent.type(comments, 'I love this restaurant!'));
    act(() => userEvent.selectOptions(occasion, 'birthday'));
    act(() => userEvent.click(screen.getByRole('button')));
    await waitFor(() => expect(handleSubmit).toBeCalled());
  });

  test('initializeTimes and updateTimes', async () => {
    const availableTimes = initializeTimes();
    render(<BookingForm availableTimes={availableTimes} />);
    expect(screen.getAllByText(/(\d{1,2}:\d{2})/, { exact: false })).toHaveLength(availableTimes.length);
  });
});
