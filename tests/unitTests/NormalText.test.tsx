import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NormalText from '../../src/ui/NormalText';

describe('NormalText Component', () => {
  test('renders NormalText with default props', () => {
    render(<NormalText />);
    const textElement = screen.getByText('Normal Text');

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass('text-black');
    expect(textElement).toHaveClass('font-normal');
  });

  test('renders NormalText with specified content', () => {
    render(<NormalText content="Custom Content" />);
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  test('renders NormalText with specified color and weight', () => {
    render(<NormalText color="text-red-500" weigth="font-bold" />);
    const textElement = screen.getByText('Normal Text');
    expect(textElement).toHaveClass('text-red-500');
    expect(textElement).toHaveClass('font-bold');
  });

  test('matches snapshot', () => {
    const { container } = render(<NormalText content="Snapshot Test" color="text-blue-500" weigth="font-semibold" />);
    expect(container).toMatchSnapshot();
  });
});
