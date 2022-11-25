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
import userEvent from '@testing-library/user-event';
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

    it('should contain correct CSS classes and properties', () => {
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

    it('should support component override', () => {
        expect(
            <MenuElement>With custom theme</MenuElement>,
            // @ts-ignore
        ).toSupportOverride('MenuElement');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(MenuElement).toSupportMarginProps();
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(MenuElement).toSupportPaddingProps();
    });

    it('should render itself as different kind of tag', () => {
        const result = render(
            <MenuElement tag="a" href="https://google.com" />,
        );
        const element = result.container.querySelector('.MenuElement-Root');
        expect(element).toBeInstanceOf(HTMLAnchorElement);
        expect(element).toHaveAttribute('href', 'https://google.com');
    });

    it('should support disabled property (not clickable!)', () => {
        const handleClick = jest.fn();

        const { getByText } = render(
            <MenuElement disabled>Disabled</MenuElement>,
        );
        const element = getByText('Disabled');
        userEvent.click(element);
        expect(handleClick).not.toHaveBeenCalled();
    });
});
