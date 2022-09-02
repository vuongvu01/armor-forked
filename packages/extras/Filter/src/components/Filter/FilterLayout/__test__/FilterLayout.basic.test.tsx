/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { FilterLayout } from '../index';
import { renderJSON } from '../../../../helpers/renderJSON';

describe('<FilterLayout />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FilterLayout />);
    });

    it('should contain correct CSS classes and properties', () => {
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

    it('should support component override', () => {
        // @ts-ignore
        expect(<FilterLayout>Hello</FilterLayout>).toSupportOverride(
            'FilterLayout',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FilterLayout).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(FilterLayout).toSupportAttributeForwarding();
    });

    it('should support "enableTopSeparator" property', async () => {
        // @ts-ignore
        let tree = renderJSON(FilterLayout, {
            enableTopSeparator: false,
        });
        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-top', `1px solid #dbdbdb`);

        // @ts-ignore
        tree = renderJSON(FilterLayout);
        // @ts-ignore
        expect(tree).toHaveStyleRule('border-top', `1px solid #dbdbdb`);
    });
});
