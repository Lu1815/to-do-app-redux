import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderOne from '../../src/ui/HeaderOne';

describe('HeaderOne Component', () => {
  test('renders HeaderOne with default props', () => {
    render(<HeaderOne />);
    expect(screen.getByText('Normal Text')).toBeInTheDocument();
    expect(screen.getByText('Normal Text')).toHaveClass('text-lg');
    expect(screen.getByText('Normal Text')).toHaveClass('text-black');
    expect(screen.getByText('Normal Text')).toHaveClass('font-normal');
  });

  test('renders HeaderOne with specified content', () => {
    render(<HeaderOne content="Custom Content" />);
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  test('renders HeaderOne with specified color and weight', () => {
    render(<HeaderOne color="text-red-500" weigth="font-bold" />);
    const header = screen.getByText('Normal Text');
    expect(header).toHaveClass('text-lg');
    expect(header).toHaveClass('text-red-500');
    expect(header).toHaveClass('font-bold');
  });

  test('matches snapshot', () => {
    const { container } = render(<HeaderOne content="Snapshot Test" color="text-blue-500" weigth="font-semibold" />);
    expect(container).toMatchSnapshot();
  });
});
