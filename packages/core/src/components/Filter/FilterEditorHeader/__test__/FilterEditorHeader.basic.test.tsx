/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { FilterEditorHeader } from '../index';

describe('<FilterEditorHeader />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FilterEditorHeader />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<FilterEditorHeader />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FilterEditorHeader', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<FilterEditorHeader ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FilterEditorHeader).toSupportRestPropsForwarding(
            'FilterEditorHeader',
        );
    });

    it('should support custom theme', () => {
        expect(
            <FilterEditorHeader>Hello</FilterEditorHeader>,
            // @ts-ignore
        ).toSupportCustomTheme('FilterEditorHeader');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FilterEditorHeader).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(FilterEditorHeader).toSupportAttributeForwarding();
    });
});
