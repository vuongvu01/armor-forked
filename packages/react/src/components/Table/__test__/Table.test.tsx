/* eslint-disable import/no-extraneous-dependencies */

import React, { ReactElement, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, render, fireEvent, prettyDOM } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { customTheme } from './helpers';
import {
    Table,
    TableHead,
    TableHeadCell,
    TableCell,
    TableRow,
    TableBody,
} from '../..';
import { ObjectLiteralType, ScalarType } from '../../../type';

describe('<Table />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Table />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<Table />);

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Table', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<Table ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support custom theme', () => {
        let tree = renderer.create(<Table>With custom theme</Table>).toJSON();

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <Table>With custom theme</Table>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(Table).toSupportMarginAttributes();
    });

    const getTable = (
        rowIds: ScalarType[],
        selectedRowIds?: ScalarType[],
        setSelectedRowIds?: () => void,
        otherProps?: ObjectLiteralType,
        header?: ReactElement,
    ) => {
        return (
            <Table
                rowIds={rowIds}
                selectedRowIds={selectedRowIds}
                onRowSelectionChange={setSelectedRowIds}
                {...otherProps}
            >
                <TableHead>
                    {!!header && header}
                    {!header && (
                        <TableRow>
                            <TableCell>Food Companies</TableCell>
                            <TableCell>Scheme ID</TableCell>
                            <TableCell>City</TableCell>
                        </TableRow>
                    )}
                </TableHead>
                <TableBody>
                    <TableRow rowId="a">
                        <TableCell>Kitchen Garden POS</TableCell>
                        <TableCell>Scheme B</TableCell>
                        <TableCell>Kano</TableCell>
                    </TableRow>
                    <TableRow rowId="b">
                        <TableCell>KFC HK</TableCell>
                        <TableCell>Scheme F</TableCell>
                        <TableCell>Gothenburg</TableCell>
                    </TableRow>
                    <TableRow rowId="c">
                        <TableCell>Foodstory</TableCell>
                        <TableCell>Scheme E</TableCell>
                        <TableCell>Xian</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    };
});
