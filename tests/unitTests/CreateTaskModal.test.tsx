import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import userEvent from '@testing-library/user-event'; // For simulating user events
import CreateTaskModal from '../../src/ui/CreateTaskModal';
import { Provider } from 'react-redux';
import { store } from '../../src/App/redux/Store';
import { delay } from 'msw';

jest.mock('../../src/App/redux/Hooks', () => ({
    useAppDispatch: jest.fn(),
    useAppSelector: jest.fn(),
}));

describe('CreateTaskModal Component', () => {
    const defaultProps = {
        showModal: true,
        setShowModal: jest.fn(),
    };

    test('renders CreateTaskModal correctly', () => {
        render(
            <Provider store={store}> {/* Wrap your component with Provider and provide the test store */}
                <CreateTaskModal {...defaultProps} />
            </Provider>
        );
        expect(screen.getByText('Task Name:')).toBeInTheDocument();
    });


    test('calls setShowModal with false when Cancel button is clicked', () => {
        render(<CreateTaskModal {...defaultProps} />);
        fireEvent.click(screen.getByText('Cancel'));
        expect(defaultProps.setShowModal).toHaveBeenCalledWith(false);
    });

    test('shows error message and does not call dispatch when Add Task button is clicked with empty taskName', async () => {
        render(
            <Provider store={store}>
                <CreateTaskModal {...defaultProps} />
            </Provider>
        );

        fireEvent.click(screen.getByText('Add Task'));

        // Wait for the asynchronous behavior (e.g., state update) to settle
        await waitFor(() => {
            expect(screen.getByText('Task name cannot be empty!')).toBeInTheDocument();
        });

        expect(defaultProps.setShowModal).toHaveBeenCalledWith(false);
    });

    test('matches snapshot', () => {
        const { container } = render(
            <Provider store={store}> {/* Wrap your component with Provider and provide the test store */}
                <CreateTaskModal {...defaultProps} />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
