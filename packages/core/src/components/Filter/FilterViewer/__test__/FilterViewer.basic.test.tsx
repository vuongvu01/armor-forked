/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { FilterViewer } from '../index';

describe('<FilterViewer />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FilterViewer />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<FilterViewer />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FilterViewer', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<FilterViewer ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FilterViewer).toSupportRestPropsForwarding('FilterViewer');
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<FilterViewer>Hello</FilterViewer>).toSupportOverride(
            'FilterViewer',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FilterViewer).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(FilterViewer).toSupportAttributeForwarding();
    });
});
