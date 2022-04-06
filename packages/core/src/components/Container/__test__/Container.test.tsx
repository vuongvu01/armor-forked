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

import { Container } from '..';

describe('<Container />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Container />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<Container />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Container', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<Container ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(Container).toSupportWidthProps();
    });

    it('should support height properties', async () => {
        // @ts-ignore
        expect(Container).toSupportHeightProps();
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(Container).toSupportPaddingProps();
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Container).toSupportMarginProps();
    });
});
