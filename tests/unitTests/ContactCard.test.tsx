import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactCard from '../../src/ui/ContactCard';

describe('ContactCard Component', () => {
  const mockContact = {
    contactName: 'John Doe',
    contactImage: 'https://example.com/avatar.jpg',
  };

  it('renders without crashing', () => {
    render(<ContactCard contactName={mockContact.contactName} contactImage={mockContact.contactImage} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByAltText('Contact Avatar')).toBeInTheDocument();
  });

  it('displays the correct contact name and image', () => {
    render(<ContactCard contactName={mockContact.contactName} contactImage={mockContact.contactImage} />);
    const contactNameElement = screen.getByText('John Doe');
    const contactImageElement = screen.getByAltText('Contact Avatar');

    expect(contactNameElement).toBeInTheDocument();
    expect(contactImageElement).toBeInTheDocument();
    expect(contactImageElement).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('applies proper styling', () => {
    render(<ContactCard contactName={mockContact.contactName} contactImage={mockContact.contactImage} />);
    const contactNameContainer = screen.getByText('John Doe').parentElement; 
    const contactCardContentContainer = contactNameContainer?.parentElement;
    const contactCardElement = contactCardContentContainer?.parentElement;

    expect(contactNameContainer).toHaveClass('grid');
    expect(contactNameContainer).toHaveClass('content-center');

    expect(contactCardContentContainer).toHaveClass('flex');
    expect(contactCardContentContainer).toHaveClass('flex-row');
    expect(contactCardContentContainer).toHaveClass('gap-3');
    expect(contactCardContentContainer).toHaveClass('justify-left');
    expect(contactCardContentContainer).toHaveClass('justify-left');
    expect(contactCardContentContainer).toHaveClass('mx-auto');

    expect(contactCardElement).toHaveClass('bg-white');
    expect(contactCardElement).toHaveClass('border-gray-200');
    expect(contactCardElement).toHaveClass('border-2');
    expect(contactCardElement).toHaveClass('py-8');
    expect(contactCardElement).toHaveClass('px-10');
    expect(contactCardElement).toHaveClass('text-center');
    expect(contactCardElement).toHaveClass('rounded-md');
    expect(contactCardElement).toHaveClass('shadow-lg');
    expect(contactCardElement).toHaveClass('w-full');
    expect(contactCardElement).toHaveClass('mx-auto');
  });

  it('matches snapshot', () => {
    const { container } = render(<ContactCard contactName={mockContact.contactName} contactImage={mockContact.contactImage} />);
    expect(container).toMatchSnapshot();
  });
});
