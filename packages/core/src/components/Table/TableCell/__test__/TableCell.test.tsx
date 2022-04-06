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
import { TableBody } from '../../TableBody';

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

    it('should contain correct CSS classes and properties', () => {
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
        const { result } = renderHook(() => useRef(null));
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

    it('should support component override', () => {
        expect(
            <table>
                <tbody>
                    <tr>
                        <TableCell>With custom theme</TableCell>
                    </tr>
                </tbody>
            </table>,
            // @ts-ignore
        ).toSupportOverride(
            'TableCell',
            // @ts-ignore
            (tree) => tree.children[0].children[0].children[0],
        );
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(TableCell).toSupportPaddingProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(TableCell).toSupportWidthProps();
    });

    it('should support height properties', async () => {
        // @ts-ignore
        expect(TableCell).toSupportHeightProps();
    });

    it('should support color properties', async () => {
        // @ts-ignore
        expect(TableCell).toSupportColorProps();
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
