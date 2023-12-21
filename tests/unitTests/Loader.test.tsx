import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../../src/ui/Loader';

describe('Loader Component', () => {
  test('renders Loader with default props', () => {
    render(<Loader />);
    const loaderElement = screen.getByRole('status');
    const svgElement = screen.getByTestId('loader-svg');
    const spanElement = screen.getByText('Loading...');

    expect(loaderElement).toBeInTheDocument();
    expect(svgElement).toBeInTheDocument();
    expect(spanElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('aria-hidden', 'true');
    expect(spanElement).toHaveClass('sr-only');
  });

  test('matches snapshot', () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});
