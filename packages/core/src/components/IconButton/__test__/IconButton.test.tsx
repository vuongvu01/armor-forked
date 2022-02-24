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

import { IconButton } from '..';

describe('<IconButton />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<IconButton />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<IconButton />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('IconButton', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<IconButton ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(IconButton).toSupportRestPropsForwarding('IconButton');
    });

    it('should support component override', () => {
        expect(
            <IconButton>With custom theme</IconButton>,
            // @ts-ignore
        ).toSupportOverride('IconButton');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(IconButton).toSupportMarginProps();
    });
});
