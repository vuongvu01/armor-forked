/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { FilterLayout } from '../index';

describe('<FilterLayout />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FilterLayout />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<FilterLayout />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FilterLayout', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<FilterLayout ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FilterLayout).toSupportRestPropsForwarding('FilterLayout');
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<FilterLayout>Hello</FilterLayout>).toSupportCustomTheme(
            'FilterLayout',
        );
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(FilterLayout).toSupportMarginAttributes();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(FilterLayout).toSupportAttributeForwarding();
    });
});
