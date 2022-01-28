/* eslint-disable import/no-extraneous-dependencies */

import {
    cleanup,
    act,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

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
});
