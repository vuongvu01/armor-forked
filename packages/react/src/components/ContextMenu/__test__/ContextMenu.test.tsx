/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

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

import { customTheme } from './helpers';
import { ContextMenu } from '..';

describe('<ContextMenu />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<ContextMenu />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<ContextMenu open />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('ContextMenu', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<ContextMenu ref={result.current} open />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    // todo: fix (need to pass "open" prop)
    it.skip('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(ContextMenu).toSupportRestPropsForwarding('ContextMenu');
    });

    // todo: fix this
    it.skip('should support custom theme', () => {
        let tree = renderer
            .create(<ContextMenu open>With custom theme</ContextMenu>)
            .toJSON();

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <ContextMenu open>With custom theme</ContextMenu>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');
    });

    // todo: fix (need to pass "open" prop)
    it.skip('should support width attributes', async () => {
        // @ts-ignore
        expect(ContextMenu).toSupportWidthAttributes();
    });

    // todo: fix (need to pass "open" prop)
    it.skip('should support height attributes', async () => {
        // @ts-ignore
        expect(ContextMenu).toSupportHeightAttributes();
    });
});
