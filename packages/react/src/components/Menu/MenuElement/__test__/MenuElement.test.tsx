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
// import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { MenuElement } from '..';

describe('<MenuElement />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<MenuElement />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<MenuElement enableExpansionHandle />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('MenuElement', {
            Root: [],
            Content: [],
            ExpansionHandle: [],
            ExpansionHandleArrow: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<MenuElement ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support custom theme', () => {
        expect(
            <MenuElement>With custom theme</MenuElement>,
            // @ts-ignore
        ).toSupportCustomTheme('MenuElement');
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(MenuElement).toSupportMarginAttributes();
    });

    it('should support padding attributes', async () => {
        // @ts-ignore
        expect(MenuElement).toSupportPaddingAttributes();
    });

    it('should render itself as different kind of tag', () => {
        const result = render(
            <MenuElement tag="a" href="https://google.com" />,
        );
        const element = result.container.querySelector('.MenuElement-Root');
        expect(element).toBeInstanceOf(HTMLAnchorElement);
        expect(element).toHaveAttribute('href', 'https://google.com');
    });
});
