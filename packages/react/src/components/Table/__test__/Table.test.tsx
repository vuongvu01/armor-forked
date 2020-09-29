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

    const expectToBeInState = (
        checked: boolean,
        container: HTMLElement,
        rowId?: ScalarType,
    ) => {
        const input = container.querySelector(
            rowId ? `td[data-rowid="${rowId}"] input` : 'th input',
        );
        expect(input).toBeInTheDocument();
        if (checked) {
            expect(input).toHaveAttribute('checked');
        } else {
            expect(input).not.toHaveAttribute('checked');
        }
    };

    it('should display row selectors: [b]', async () => {
        const rowIds = ['a', 'b', 'c'];
        const { container } = render(getTable(rowIds, ['b']));

        expectToBeInState(true, container);
        expectToBeInState(false, container, 'a');
        expectToBeInState(true, container, 'b');
        expectToBeInState(false, container, 'c');
    });

    it('should display row selectors: [a, c]', async () => {
        const rowIds = ['a', 'b', 'c'];
        const { container } = render(getTable(rowIds, ['a', 'c']));

        expectToBeInState(true, container);
        expectToBeInState(true, container, 'a');
        expectToBeInState(false, container, 'b');
        expectToBeInState(true, container, 'c');
    });

    it('should display row selectors: [a, b, c]', async () => {
        const rowIds = ['a', 'b', 'c'];
        const { container } = render(getTable(rowIds, rowIds));

        expectToBeInState(true, container);
        expectToBeInState(true, container, 'a');
        expectToBeInState(true, container, 'b');
        expectToBeInState(true, container, 'c');
    });

    it('should display row selectors: []', async () => {
        const rowIds = ['a', 'b', 'c'];
        const { container } = render(getTable(rowIds, []));

        expectToBeInState(false, container);
        expectToBeInState(false, container, 'a');
        expectToBeInState(false, container, 'b');
        expectToBeInState(false, container, 'c');
    });

    it('should change row selection by click on the row selector', async () => {
        const rowIds = ['a', 'b', 'c'];
        const onSelectionChange = jest.fn();
        const { container } = render(
            getTable(rowIds, ['b'], onSelectionChange),
        );

        const input = container.querySelector(`td[data-rowid="a"] input`);
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['a', 'b']);

        onSelectionChange.mockReset();
        const td = container.querySelector(`td[data-rowid="a"]`);
        fireEvent.click(td!);
        expect(onSelectionChange).toHaveBeenCalledWith(['a', 'b']);
    });

    it('should select all rows by click on the common selector when something selected', async () => {
        const rowIds = ['a', 'b', 'c'];
        const onSelectionChange = jest.fn();
        const { container } = render(
            getTable(rowIds, ['b'], onSelectionChange),
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['a', 'b', 'c']);

        onSelectionChange.mockReset();
        const th = container.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith(['a', 'b', 'c']);
    });

    it('should select all rows by click on the common selector when nothing selected', async () => {
        const rowIds = ['a', 'b', 'c'];
        const onSelectionChange = jest.fn();
        const { container } = render(getTable(rowIds, [], onSelectionChange));

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['a', 'b', 'c']);

        onSelectionChange.mockReset();
        const th = container.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith(['a', 'b', 'c']);
    });

    it('should deselect all rows by click on the common selector when everything selected', async () => {
        const rowIds = ['a', 'b', 'c'];
        const onSelectionChange = jest.fn();
        const { container } = render(
            getTable(rowIds, rowIds, onSelectionChange),
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith([]);

        onSelectionChange.mockReset();
        const th = container.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith([]);
    });

    it('should switch current sort order asc => desc', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            getTable(
                [],
                undefined,
                undefined,
                {
                    onRowSortOrderChange,
                    rowSortOrder: [['company', 'asc']],
                },
                <TableRow>
                    <TableHeadCell columnId="company" sortable>
                        Food Companies
                    </TableHeadCell>
                    <TableHeadCell columnId="scheme" sortable>
                        Scheme ID
                    </TableHeadCell>
                    <TableHeadCell columnId="city" sortable>
                        City
                    </TableHeadCell>
                </TableRow>,
            ),
        );

        const cell = container.querySelector('thead th');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([
            ['company', 'desc'],
        ]);
    });

    it('should switch current sort order desc => undefined', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            getTable(
                [],
                undefined,
                undefined,
                {
                    onRowSortOrderChange,
                    rowSortOrder: [['company', 'desc']],
                },
                <TableRow>
                    <TableHeadCell columnId="company" sortable>
                        Food Companies
                    </TableHeadCell>
                    <TableHeadCell columnId="scheme" sortable>
                        Scheme ID
                    </TableHeadCell>
                    <TableHeadCell columnId="city" sortable>
                        City
                    </TableHeadCell>
                </TableRow>,
            ),
        );

        const cell = container.querySelector('thead th');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([]);
    });

    it('should switch current sort order undefined => asc', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            getTable(
                [],
                undefined,
                undefined,
                {
                    onRowSortOrderChange,
                    rowSortOrder: [],
                },
                <TableRow>
                    <TableHeadCell columnId="company" sortable>
                        Food Companies
                    </TableHeadCell>
                    <TableHeadCell columnId="scheme" sortable>
                        Scheme ID
                    </TableHeadCell>
                    <TableHeadCell columnId="city" sortable>
                        City
                    </TableHeadCell>
                </TableRow>,
            ),
        );

        const cell = container.querySelector('thead th');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['company', 'asc']]);
    });

    it('should switch other field sort order asc => asc', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            getTable(
                [],
                undefined,
                undefined,
                {
                    onRowSortOrderChange,
                    rowSortOrder: [['company', 'asc']],
                },
                <TableRow>
                    <TableHeadCell columnId="company" sortable>
                        Food Companies
                    </TableHeadCell>
                    <TableHeadCell columnId="scheme" sortable>
                        Scheme ID
                    </TableHeadCell>
                    <TableHeadCell columnId="city" sortable>
                        City
                    </TableHeadCell>
                </TableRow>,
            ),
        );

        const cell = container.querySelector('thead th:nth-child(2)');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['scheme', 'asc']]);
    });

    it('should allow to override the default onclick behaviour', async () => {
        const onRowSortOrderChange = jest.fn();
        const onHeaderCellClick = jest.fn(event => {
            event.stopPropagation();
        });
        const { container } = render(
            getTable(
                [],
                undefined,
                undefined,
                {
                    onRowSortOrderChange,
                    rowSortOrder: [['company', 'asc']],
                },
                <TableRow>
                    <TableHeadCell columnId="company" sortable>
                        Food Companies
                    </TableHeadCell>
                    <TableHeadCell
                        columnId="scheme"
                        sortable
                        onClick={onHeaderCellClick}
                    >
                        Scheme ID
                    </TableHeadCell>
                    <TableHeadCell columnId="city" sortable>
                        City
                    </TableHeadCell>
                </TableRow>,
            ),
        );

        const cell = container.querySelector('thead th:nth-child(2)');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).not.toHaveBeenCalled();
        expect(onHeaderCellClick).toHaveBeenCalled();
    });
});
