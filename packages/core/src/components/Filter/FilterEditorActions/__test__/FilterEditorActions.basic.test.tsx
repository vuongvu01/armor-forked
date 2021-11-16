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

import { FilterEditorActions } from '../index';

describe('<FilterEditorActions />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FilterEditorActions />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<FilterEditorActions />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FilterEditorActions', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<FilterEditorActions ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FilterEditorActions).toSupportRestPropsForwarding(
            'FilterEditorActions',
        );
    });

    it('should support custom theme', () => {
        expect(
            <FilterEditorActions>Hello</FilterEditorActions>,
            // @ts-ignore
        ).toSupportCustomTheme('FilterEditorActions');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FilterEditorActions).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(FilterEditorActions).toSupportAttributeForwarding();
    });
});
