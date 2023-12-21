import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '../../src/ui/Button';

describe('Button Component', () => {
  it('renders without crashing', () => {
    render(<Button onClick={() => {}} />);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<Button onClick={() => {}} text="Custom Button" />);
    expect(screen.getByText('Custom Button')).toBeInTheDocument();
  });

  it('executes onClick callback when clicked', () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick} />);
    
    const button = screen.getByText('Button');
    fireEvent.click(button);
    
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom text color', () => {
    render(<Button onClick={() => {}} textColor="text-red-500" />);
    const button = screen.getByText('Button');
    expect(button).toHaveClass('text-red-500');
  });

  it('applies custom background color', () => {
    render(<Button onClick={() => {}} backgroundColor="bg-blue-500" />);
    const button = screen.getByText('Button');
    expect(button).toHaveClass('bg-blue-500');
  });

  it('applies custom className', () => {
    render(<Button onClick={() => {}} className="custom-class" />);
    const button = screen.getByText('Button');
    expect(button).toHaveClass('custom-class');
  });

  it('matches snapshot', () => {
    const { container } = render(<Button onClick={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
