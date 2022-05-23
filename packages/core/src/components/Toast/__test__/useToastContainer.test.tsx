/* eslint-disable import/no-extraneous-dependencies */

import {
    cleanup,
    act,
    screen,
    waitFor,
    fireEvent,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import { useToastContainer } from '../hooks';

describe('useToastContainer', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should not crash', async () => {
        act(() => {
            renderHook(() => useToastContainer());
        });
    });

    it('should add new toast', async () => {
        const { result } = renderHook(() => useToastContainer());
        const { makeToast } = result.current;
        act(() => {
            makeToast({ message: 'toast message' });
        });
        const myToast = await screen.findByText('toast message');

        await waitFor(() => expect(myToast).toBeInTheDocument());
    });

    it('should remove toast by clicking close button', async () => {
        const { result } = renderHook(() => useToastContainer());
        const { makeToast } = result.current;
        act(() => {
            makeToast({ message: 'toast message' });
        });
        const myToast = await screen.findByText('toast message');
        const closeBtn = await screen.findByTestId('Message-CloseButton');

        fireEvent.click(closeBtn);

        await waitForElementToBeRemoved(myToast, { timeout: 5000 });
        expect(myToast).not.toBeInTheDocument();
    });

    it('should close toast automatically', async () => {
        const { result } = renderHook(() => useToastContainer());
        const { makeToast } = result.current;
        act(() => {
            makeToast({
                message: 'toast message',
                autoClose: true,
                autoCloseTime: 100,
            });
        });

        const myToast = await screen.findByText('toast message');

        await waitForElementToBeRemoved(myToast, { timeout: 5000 });
        expect(myToast).not.toBeInTheDocument();
    });

    it('should disable auto close', async () => {
        const { result } = renderHook(() => useToastContainer());
        const { makeToast } = result.current;

        act(() => {
            makeToast({ message: 'toast message', autoClose: false });
        });

        const myToast = await screen.findByText('toast message');

        await waitFor(() => expect(myToast).toBeInTheDocument());
    });

    it('should call onClose', async () => {
        const { result } = renderHook(useToastContainer);
        const { makeToast } = result.current;

        const onClose = jest.fn();

        act(() => {
            makeToast({ message: 'Message', onClose });
        });

        const toast = await screen.findByText('Message');

        await waitFor(() => expect(toast).toBeInTheDocument());

        const closeButton = await screen.getByTestId('Message-CloseButton');

        userEvent.click(closeButton);

        await waitFor(() => {
            expect(toast).not.toBeInTheDocument();
            expect(onClose).toHaveBeenCalledTimes(1);
        });
    });
});
