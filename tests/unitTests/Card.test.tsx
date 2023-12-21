import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../src/ui/Card';

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<Card text="Test Card" />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  it('renders with default text when text prop is not provided', () => {
    render(<Card />);
    expect(screen.getByText('Card Text')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Card text="Snapshot Test" />);
    expect(container).toMatchSnapshot();
  });

  it('applies proper styling', () => {
    render(<Card text="Styling Test" />);
    const cardElement = screen.getByText('Styling Test').parentElement;

    expect(cardElement).toHaveClass('w-full');
    expect(cardElement).toHaveClass('py-2');
    expect(cardElement).toHaveClass('px-3');
    expect(cardElement).toHaveClass('border-gray-200');
    expect(cardElement).toHaveClass('border-2');
    expect(cardElement).toHaveClass('rounded-md');
  });

  it('renders with custom text', () => {
    render(<Card text="Custom Text" />);
    expect(screen.getByText('Custom Text')).toBeInTheDocument();
  });
});
