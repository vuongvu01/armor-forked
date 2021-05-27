/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { FilterViewerTag } from '../index';

describe('<FilterViewerTag />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FilterViewerTag />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<FilterViewerTag />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FilterViewerTag', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<FilterViewerTag ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FilterViewerTag).toSupportRestPropsForwarding('FilterViewerTag');
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<FilterViewerTag>Hello</FilterViewerTag>).toSupportCustomTheme(
            'FilterViewerTag',
        );
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(FilterViewerTag).toSupportMarginAttributes();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(FilterViewerTag).toSupportAttributeForwarding();
    });
});
