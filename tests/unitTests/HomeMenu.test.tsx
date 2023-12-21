import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomeMenu } from '../../src/ui/HomeMenu'

describe('HomeMenu Component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <HomeMenu />
      </MemoryRouter>
    );
    expect(screen.getByText('Tasks')).toBeInTheDocument();
    expect(screen.getByText('List')).toBeInTheDocument();
  });

  it('renders correct links with proper href attributes', () => {
    render(
      <MemoryRouter>
        <HomeMenu />
      </MemoryRouter>
    );

    const tasksLink = screen.getByText('Tasks');
    const listLink = screen.getByText('List');

    expect(tasksLink).toHaveAttribute('href', '/tasks');
    expect(listLink).toHaveAttribute('href', '/list');
  });

  it('applies proper styling to the links', () => {
    render(
      <MemoryRouter>
        <HomeMenu />
      </MemoryRouter>
    );

    const tasksLink = screen.getByText('Tasks');
    const listLink = screen.getByText('List');

    expect(tasksLink).toHaveClass('bg-btn');
    expect(listLink).toHaveClass('bg-btn');
  });

  it('matches snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <HomeMenu />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});