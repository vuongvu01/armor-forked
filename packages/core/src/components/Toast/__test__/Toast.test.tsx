/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { Toast } from '..';

describe('<Toast />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without any errors', async () => {
        render(<Toast id="id" message="message" />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<Toast id="id" message="message" />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Toast', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<Toast ref={result.current} id="id" message="message" />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Toast).toSupportRestPropsForwarding('Toast');
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<Toast>Hello</Toast>).toSupportOverride('Toast');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Toast).toSupportMarginProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(Toast).toSupportAttributeForwarding();
    });

    it('should display correct message', async () => {
        render(<Toast id="id" message="toast message" />);
        const toast = await screen.findByText('toast message');

        expect(toast).toBeInTheDocument();
    });

    it('should show/hide progress bar', async () => {
        let progressBar;

        const { rerender } = render(<Toast id="id" message="toast message" />);
        progressBar = await screen.findByTestId('ProgressBarRoot');
        expect(progressBar).toBeInTheDocument();

        rerender(<Toast id="id" message="message" autoClose={false} />);
        progressBar = screen.queryByTestId('ProgressBarRoot');
        expect(progressBar).not.toBeInTheDocument();
    });

    it('should handle message action click', async () => {
        const mockFn = jest.fn();
        render(
            <Toast
                id="id"
                message="toast message"
                action={{ label: 'action', onClick: mockFn }}
            />,
        );
        const messageAction = await screen.findByText('action');
        fireEvent.click(messageAction);

        expect(messageAction).toBeInTheDocument();
        expect(mockFn).toBeCalledTimes(1);
    });
});
