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
import { TableCell } from '..';
import { tableCellRootTestId } from '../constants';
import { TableHead } from '../../TableHead';
import { Table } from '../../Table';
import { TableRow } from '../../TableRow';

describe('<TableCell />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <TableCell />
                    </tr>
                </tbody>
            </table>,
        );
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(
            <table>
                <tbody>
                    <tr>
                        <TableCell />
                    </tr>
                </tbody>
            </table>,
        );
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableCell', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(
            <table>
                <tbody>
                    <tr>
                        <TableCell ref={result.current} />
                    </tr>
                </tbody>
            </table>,
        );

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it.skip('should support custom theme', () => {
        let tree = renderer
            .create(
                <table>
                    <tbody>
                        <tr>
                            <TableCell>With custom theme</TableCell>
                        </tr>
                    </tbody>
                </table>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree.children[0].children[0].children[0]).not.toHaveStyleRule(
            'border-width',
            '2px',
        );

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <table>
                        <tbody>
                            <tr>
                                <TableCell>With custom theme</TableCell>
                            </tr>
                        </tbody>
                    </table>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree.children[0].children[0].children[0]).toHaveStyleRule(
            'border-width',
            '2px',
        );
    });

    it.skip('should support padding attributes', async () => {
        // @ts-ignore
        expect(TableCell).toSupportPaddingAttributes();
    });

    it.skip('should support width attributes', async () => {
        // @ts-ignore
        expect(TableCell).toSupportWidthAttributes();
    });

    it.skip('should support height attributes', async () => {
        // @ts-ignore
        expect(TableCell).toSupportHeightAttributes();
    });

    it.skip('should support color attributes', async () => {
        // @ts-ignore
        expect(TableCell).toSupportColorAttributes();
    });

    it('should have TD tag in body', async () => {
        const result = render(
            <table>
                <tbody>
                    <tr>
                        <TableCell />
                    </tr>
                </tbody>
            </table>,
        );

        const node = result.getByTestId(tableCellRootTestId);
        expect(node.tagName).toEqual('TD');
    });

    it('should have TH tag in head', async () => {
        const result = render(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                    </TableRow>
                </TableHead>
            </Table>,
        );

        const node = result.getByTestId(tableCellRootTestId);
        expect(node.tagName).toEqual('TH');
    });
});
