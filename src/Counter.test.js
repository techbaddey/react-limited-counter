import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders without crashing', () => {
    render(<Counter />);
  });

  test('increments count by 1 when Increment button is clicked', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    const countDisplay = getByText('0');

    fireEvent.click(incrementButton);

    expect(countDisplay.textContent).toBe('1');
  });

  test('decrements count by 1 when Decrement button is clicked', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('Decrement');
    const countDisplay = getByText('0');

    fireEvent.click(decrementButton);

    expect(countDisplay.textContent).toBe('0');
  });

  test('does not increment count beyond 10 and disables Increment button', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    const countDisplay = getByText('10');

    fireEvent.click(incrementButton);

    expect(countDisplay.textContent).toBe('10');
    expect(incrementButton).toBeDisabled();
  });

  test('does not decrement count below 0 and disables Decrement button', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('Decrement');
    const countDisplay = getByText('0');

    fireEvent.click(decrementButton);

    expect(countDisplay.textContent).toBe('0');
    expect(decrementButton).toBeDisabled();
  });
});
