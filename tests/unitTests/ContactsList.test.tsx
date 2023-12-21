import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { HttpResponse, delay, http } from 'msw';
import { setupServer } from 'msw/node';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { mockApi } from '../../src/App/redux/MockAPI';
import ContactsList from '../../src/ui/ContactsList';

// Mock API server
const server = setupServer(
    http.get('https://6172cfe5110a740017222e2b.mockapi.io/elements', () => {
        return HttpResponse.json({ id: '1', name: 'John Doe', avatar: 'john.jpg' });
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('ContactsList Component', () => {
    it('renders Loader when isLoading is true', async () => {
        server.use(
            http.get('https://6172cfe5110a740017222e2b.mockapi.io/elements', async (info) => {
                await delay(1000);

                return new HttpResponse(null, { status: 404 })
            })
        );

        render(
            <ApiProvider api={mockApi}>
                <ContactsList />
            </ApiProvider>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('matches snapshot', async () => {
        const { container } = render(
            <ApiProvider api={mockApi}>
                <ContactsList />
            </ApiProvider>
        );

        await waitFor(() => {
            expect(container).toMatchSnapshot();
        });
    });
});
