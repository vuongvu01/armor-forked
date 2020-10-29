/* eslint-disable import/no-extraneous-dependencies */

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
import { TableBody } from '..';

describe('<TableBody />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(
            <table>
                <TableBody />
            </table>,
        );
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(
            <table>
                <TableBody />
            </table>,
        );
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableBody', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(
            <table>
                <TableBody ref={result.current} />
            </table>,
        );

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it.skip('should support custom theme', () => {
        let tree = renderer
            .create(
                <table>
                    <TableBody>With custom theme</TableBody>
                </table>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree.children[0]).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <table>
                        <TableBody>With custom theme</TableBody>
                    </table>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree.children[0]).toHaveStyleRule('border-width', '2px');
    });
});
