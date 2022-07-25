/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render, screen, act } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { ToastContainer } from '../ToastContainer';
import { toastStore } from '../ToastStore';

describe('<ToastContainer />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<ToastContainer />);
    });

    it('should render toast messages', async () => {
        const toasts = [
            { id: '1', message: 'message 1' },
            { id: '2', message: 'message 2' },
            { id: '3', message: 'message 3' },
            { id: '4', message: 'message 4' },
            { id: '5', message: 'message 5' },
        ];

        toasts.forEach(toastStore.makeToast);

        act(() => {
            render(<ToastContainer />);
        });

        for (let i = 0; i < toasts.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            const toast = await screen.findByText(toasts[i].message);
            expect(toast).toBeInTheDocument();
        }
    });
});
