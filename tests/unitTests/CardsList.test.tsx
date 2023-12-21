import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from '../../src/ui/CardsList';

// Mock the Card component since we want to test CardsList in isolation
jest.mock('../../src/ui/Card', () => ({ text }: { text: string }) => <div>{text}</div>);

describe('CardsList Component', () => {
  it('renders without crashing', () => {
    render(<CardsList todosList={[]} />);
    expect(screen.getByText('There are no tasks yet...')).toBeInTheDocument();
  });

  it('renders multiple Card components', () => {
    const todosList = [
      { id: 1, name: 'Task 1' },
      { id: 2, name: 'Task 2' },
    ];

    render(<CardsList todosList={todosList} />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('renders default message when todosList is empty', () => {
    render(<CardsList todosList={[]} />);
    expect(screen.getByText('There are no tasks yet...')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const todosList = [
      { id: 1, name: 'Task 1' },
      { id: 2, name: 'Task 2' },
    ];

    const { container } = render(<CardsList todosList={todosList} />);
    expect(container).toMatchSnapshot();
  });
});
