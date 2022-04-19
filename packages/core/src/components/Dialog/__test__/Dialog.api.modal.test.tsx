/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react';

import { Dialog } from '../..';

describe('<Dialog />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should support enableBackdrop property', () => {
        const { container, rerender } = render(<Dialog />);

        let node = container.querySelector('.Dialog-Backdrop');
        expect(node).toBeInTheDocument();

        rerender(<Dialog enableBackdrop={false} />);
        node = container.querySelector('.Dialog-Backdrop');
        expect(node).not.toBeInTheDocument();
    });

    it('should support enableCloseButton property', async () => {
        const { container, rerender } = render(
            <Dialog open enablePortal={false} />,
        );

        let node = container.querySelector('.Dialog-CloseButton');
        expect(node).toBeInTheDocument();

        rerender(
            <Dialog enablePortal={false} open enableCloseButton={false} />,
        );
        node = container.querySelector('.Dialog-CloseButton');
        expect(node).not.toBeInTheDocument();
    });

    // todo: this test does not work properly, fix it
    it.skip('should support enableCloseByEscape property', async () => {
        const onClose = jest.fn();
        render(
            <Dialog
                enablePortal={false}
                open
                onOpenChange={onClose}
                enableCloseByEscape={true}
            />,
        );

        const event = new KeyboardEvent('keydown', {
            key: 'Escape',
        });
        global.document.dispatchEvent(event);

        await waitFor(() => expect(onClose).toHaveBeenCalled());
    });

    it('should support enableCloseOnBackdropClick property', async () => {
        const onClose = jest.fn();
        const { container, rerender } = render(
            <Dialog open enablePortal={false} onOpenChange={onClose} />,
        );
        let backdrop = container.querySelector('.Dialog-Backdrop');
        expect(backdrop).toBeInTheDocument();

        fireEvent.click(backdrop!);

        await waitFor(() => expect(onClose).toHaveBeenCalled());

        onClose.mockClear();

        rerender(
            <Dialog
                open
                enablePortal={false}
                onOpenChange={onClose}
                enableCloseOnBackdropClick={false}
            />,
        );
        backdrop = container.querySelector('.Dialog-Backdrop');

        fireEvent.click(backdrop!);

        await expect(async () => {
            await waitFor(() => expect(onClose).toHaveBeenCalled());
        }).rejects.toEqual(expect.anything());
    });
});
