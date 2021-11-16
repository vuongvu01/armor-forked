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
import { EmptyState } from '../EmptyState';

describe('<EmptyState />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<EmptyState />);
    });

    it('should contain correct CSS classes and properties', () => {
        let result = render(<EmptyState />);

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('EmptyState', {
            Root: [],
        });

        // @ts-ignore
        expect(result.container).toHaveChildrenWithClassNames([
            'EmptyState-Root',
            'EmptyState-Title',
            'EmptyState-Description',
            'EmptyState-Image',
            'EmptyState-Actions',
            'EmptyState-Vertical',
        ]);

        result = render(<EmptyState layout="horizontal" />);

        // @ts-ignore
        expect(result.container).toHaveChildrenWithClassNames([
            'EmptyState-Horizontal',
        ]);
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<EmptyState ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(EmptyState).toSupportRestPropsForwarding('EmptyState');
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<EmptyState>Hello</EmptyState>).toSupportCustomTheme(
            'EmptyState',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(EmptyState).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(EmptyState).toSupportAttributeForwarding();
    });
});
