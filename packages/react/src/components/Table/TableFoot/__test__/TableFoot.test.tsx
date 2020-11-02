/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { customTheme } from './helpers';
import { TableFoot } from '..';

describe('<TableFoot />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(
            <table>
                <TableFoot />
            </table>,
        );
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(
            <table>
                <TableFoot />
            </table>,
        );
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableFoot', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(
            <table>
                <TableFoot ref={result.current} />
            </table>,
        );

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it.skip('should support custom theme', () => {
        let tree = renderer
            .create(
                <table>
                    <TableFoot>With custom theme</TableFoot>
                </table>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree.children[0]).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <table>
                        <TableFoot>With custom theme</TableFoot>
                    </table>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree.children[0]).toHaveStyleRule('border-width', '2px');
    });
});
