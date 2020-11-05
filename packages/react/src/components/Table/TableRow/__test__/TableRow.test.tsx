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
import { TableRow } from '..';

describe('<TableRow />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(
            <table>
                <tbody>
                    <TableRow />
                </tbody>
            </table>,
        );
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(
            <table>
                <tbody>
                    <TableRow />
                </tbody>
            </table>,
        );
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableRow', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(
            <table>
                <tbody>
                    <TableRow ref={result.current} />
                </tbody>
            </table>,
        );

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support custom theme', () => {
        let tree = renderer
            .create(
                <table>
                    <tbody>
                        <TableRow>
                            <td>With custom theme</td>
                        </TableRow>
                    </tbody>
                </table>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree.children[0].children[0]).not.toHaveStyleRule(
            'border-width',
            '2px',
        );

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <table>
                        <tbody>
                            <TableRow>
                                <td>With custom theme</td>
                            </TableRow>
                        </tbody>
                    </table>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree.children[0].children[0]).toHaveStyleRule(
            'border-width',
            '2px',
        );
    });

    it('should support height attributes', async () => {
        // @ts-ignore
        expect(TableRow).toSupportHeightAttributes('TableRowRoot', children => (
            <table>
                <tbody>{children}</tbody>
            </table>
        ));
    });
});
