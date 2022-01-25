/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';

import { cleanup, render, waitFor } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { ProgressBar } from '..';

describe('<ProgressBar />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<ProgressBar progress={50} />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<ProgressBar />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('ProgressBar', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<ProgressBar ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(ProgressBar).toSupportRestPropsForwarding('ProgressBar');
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<ProgressBar>Hello</ProgressBar>).toSupportCustomTheme(
            'ProgressBar',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(ProgressBar).toSupportMarginProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(ProgressBar).toSupportAttributeForwarding();
    });

    it('should trigger onFinished event in auto mode', async () => {
        const mockFn = jest.fn();

        render(<ProgressBar autoRun duration={100} onFinish={mockFn} />);

        await waitFor(() => expect(mockFn).toBeCalledTimes(1));
    });
});
