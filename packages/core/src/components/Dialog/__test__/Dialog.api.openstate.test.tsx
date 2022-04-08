/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react';

import { Dialog } from '../..';

describe('<Dialog />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should support open property', () => {
        const { container, rerender } = render(<Dialog enablePortal={false} />);

        let node = container.querySelector('.Dialog-Root.Dialog-Root--closed');
        expect(node).toBeInTheDocument();

        rerender(<Dialog open enablePortal={false} />);
        node = container.querySelector('.Dialog-Root.Dialog-Root--open');
        expect(node).toBeInTheDocument();
    });

    it('should support onOpenChange property', async () => {
        const onClose = jest.fn();
        const { container } = render(
            <Dialog enablePortal={false} open onOpenChange={onClose} />,
        );

        const node = container.querySelector('.Dialog-CloseButton');
        expect(node).toBeInTheDocument();

        fireEvent.click(node!);

        await waitFor(() => expect(onClose).toHaveBeenCalledWith(false));
    });

    it('should support defaultOpen property', () => {
        const { container } = render(
            <Dialog enablePortal={false} defaultOpen={true} />,
        );

        const node = container.querySelector('.Dialog-Root.Dialog-Root--open');
        expect(node).toBeInTheDocument();
    });

    it('should take open over defaultOpen property', () => {
        const { container } = render(
            <Dialog enablePortal={false} defaultOpen={true} open={false} />,
        );

        const node = container.querySelector(
            '.Dialog-Root.Dialog-Root--closed',
        );
        expect(node).toBeInTheDocument();
    });
});
