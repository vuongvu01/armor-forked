/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    cleanup as cleanupHooks,
    renderHook,
} from '@testing-library/react-hooks';
import { ActionSheet } from '..';

describe('<ActionSheet />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<ActionSheet />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<ActionSheet />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('ActionSheet', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<ActionSheet ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(ActionSheet).toSupportRestPropsForwarding('ActionSheet');
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<ActionSheet>Hello</ActionSheet>).toSupportCustomTheme(
            'ActionSheet',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(ActionSheet).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(ActionSheet).toSupportAttributeForwarding();
    });
});
