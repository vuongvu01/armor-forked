/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';

import {
    // fireEvent,
    cleanup,
    render,
    // prettyDOM,
    // wait,
    // waitForElement,
} from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { Menu } from '../..';

describe('<Menu />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Menu />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<Menu />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Menu', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<Menu ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<Menu>With custom theme</Menu>).toSupportCustomTheme('Menu');
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(Menu).toSupportMarginAttributes();
    });

    it('should support padding attributes', async () => {
        // @ts-ignore
        expect(Menu).toSupportPaddingAttributes();
    });
});
