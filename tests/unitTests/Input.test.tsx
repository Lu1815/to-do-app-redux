import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from '../../src/ui/Input';

describe('Input Component', () => {
  test('renders Input with default props', () => {
    render(<Input setTaskName={() => {}} error={false} setError={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Task Name...');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
    expect(inputElement).not.toHaveClass('shake-animation');
    expect(inputElement).not.toHaveClass('border-red');
  });

  test('handles input change and calls setTaskName', () => {
    const mockSetTaskName = jest.fn();
    render(<Input setTaskName={mockSetTaskName} error={false} setError={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Task Name...');

    fireEvent.change(inputElement, { target: { value: 'New Task' } });

    expect(mockSetTaskName).toHaveBeenCalledWith('New Task');
  });

  test('handles input change and resets error state', () => {
    const mockSetError = jest.fn();
    render(<Input setTaskName={() => {}} error={true} setError={mockSetError} />);
    const inputElement = screen.getByPlaceholderText('Task Name...');

    fireEvent.change(inputElement, { target: { value: 'New Task' } });

    expect(mockSetError).toHaveBeenCalledWith(false);
  });

  test('matches snapshot', () => {
    const { container } = render(<Input setTaskName={() => {}} error={false} setError={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
