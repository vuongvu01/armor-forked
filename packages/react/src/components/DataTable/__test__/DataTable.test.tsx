/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';

import {
    cleanup,
    fireEvent,
    render,
    prettyDOM,
    wait,
} from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { DataTable } from '../..';
import { ScalarType } from '../../../type';
import { dataSource, columns } from '../__story__/demoData';

describe('<DataTable />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<DataTable />);
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<DataTable ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should switch current sort order asc => desc, [uncontrolled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                defaultRowSortOrder={[['age', 'asc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'desc']]);
    });

    it('should switch current sort order asc => desc, [controlled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                rowSortOrder={[['age', 'asc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'desc']]);
    });

    it('should switch current sort order desc => unsorted, [uncontrolled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                defaultRowSortOrder={[['age', 'desc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([]);
    });

    it('should switch current sort order desc => unsorted, [controlled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                rowSortOrder={[['age', 'desc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([]);
    });

    it('should switch current sort order unsorted => asc, [uncontrolled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                defaultRowSortOrder={[]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'asc']]);
    });

    it('should switch current sort order unsorted => asc, [controlled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                rowSortOrder={[]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'asc']]);
    });

    it('should switch other field sort order asc => asc, [uncontrolled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                defaultRowSortOrder={[['age', 'asc']]}
            />,
        );

        const cell = container.querySelector(
            'thead th[data-columnid="address"]',
        );

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['address', 'asc']]);
    });

    it('should switch other field sort order asc => asc, [controlled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                rowSortOrder={[['age', 'asc']]}
            />,
        );

        const cell = container.querySelector(
            'thead th[data-columnid="address"]',
        );

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['address', 'asc']]);
    });

    it('should switch current sort order desc => asc when enableNeutralRowSorting is set to false, [uncontrolled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                enableNeutralRowSorting={false}
                defaultRowSortOrder={[['age', 'desc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'asc']]);
    });

    it('should switch current sort order desc => asc when enableNeutralRowSorting is set to false, [controlled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                enableNeutralRowSorting={false}
                rowSortOrder={[['age', 'desc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'asc']]);
    });

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

    it('should display row selectors: [2] [uncontrolled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['2']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(false, container, '1');
        expectToBeInState(true, container, '2');
        expectToBeInState(false, container, '3');
    });

    it('should display row selectors: [2] [controlled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['2']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(false, container, '1');
        expectToBeInState(true, container, '2');
        expectToBeInState(false, container, '3');
    });

    it('should display row selectors: [1, 3] [uncontrolled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['1', '3']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(true, container, '1');
        expectToBeInState(false, container, '2');
        expectToBeInState(true, container, '3');
    });

    it('should display row selectors: [1, 3] [controlled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['1', '3']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(true, container, '1');
        expectToBeInState(false, container, '2');
        expectToBeInState(true, container, '3');
    });

    it('should display row selectors: [1, 2, 3] [uncontrolled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['1', '2', '3']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(true, container, '1');
        expectToBeInState(true, container, '2');
        expectToBeInState(true, container, '3');
    });

    it('should display row selectors: [1, 2, 3] [controlled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['1', '2', '3']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(true, container, '1');
        expectToBeInState(true, container, '2');
        expectToBeInState(true, container, '3');
    });

    it('should display row selectors: [] [uncontrolled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={[]}
            />,
        );

        expectToBeInState(false, container);
        expectToBeInState(false, container, '1');
        expectToBeInState(false, container, '2');
        expectToBeInState(false, container, '3');
    });

    it('should display row selectors: [] [controlled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={[]}
            />,
        );

        expectToBeInState(false, container);
        expectToBeInState(false, container, '1');
        expectToBeInState(false, container, '2');
        expectToBeInState(false, container, '3');
    });

    it('should change row selection by click on the row selector [uncontrolled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['2']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector(`td[data-rowid="1"] input`);
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '2']);

        // in un-controlled case clicking on the selected row deselects it
        onSelectionChange.mockReset();
        const td = container.querySelector(`td[data-rowid="1"]`);
        fireEvent.click(td!);
        expect(onSelectionChange).toHaveBeenCalledWith(['2']);
    });

    it('should change row selection by click on the row selector [controlled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['2']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector(`td[data-rowid="1"] input`);
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '2']);

        onSelectionChange.mockReset();
        const td = container.querySelector(`td[data-rowid="1"]`);
        fireEvent.click(td!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '2']);
    });

    it('should select all rows by click on the common selector when something selected [uncontrolled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['2']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);

        const { container: container1 } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['2']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        onSelectionChange.mockReset();
        const th = container1.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);
    });

    it('should select all rows by click on the common selector when something selected [controlled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['2']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);

        onSelectionChange.mockReset();
        const th = container.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);
    });

    it('should select all rows by click on the common selector when nothing selected, [uncontrolled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={[]}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);

        onSelectionChange.mockReset();
        const { container: container1 } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={[]}
                onRowSelectionChange={onSelectionChange}
            />,
        );
        const th = container1.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);
    });

    it('should select all rows by click on the common selector when nothing selected, [controlled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={[]}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);

        onSelectionChange.mockReset();
        const th = container.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);
    });

    it('should deselect all rows by click on the common selector when everything selected, [uncontrolled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['1', '2', '3']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith([]);

        onSelectionChange.mockReset();
        const { container: container1 } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['1', '2', '3']}
                onRowSelectionChange={onSelectionChange}
            />,
        );
        const th = container1.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith([]);
    });

    it('should deselect all rows by click on the common selector when everything selected, [controlled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['1', '2', '3']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith([]);

        onSelectionChange.mockReset();
        const th = container.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith([]);
    });

    it('should support headCellProps', async () => {
        const onRowSortOrderChange = jest.fn();
        const onHeaderCellClick = jest.fn(event => {
            event.stopPropagation();
        });

        const columnsLocal = [
            {
                title: 'Name',
                id: 'name',
            },
            {
                title: 'Age',
                id: 'age',
                sortable: true,
                headCellProps: {
                    onClick: onHeaderCellClick,
                },
            },
            {
                title: 'Address',
                id: 'address',
            },
        ];

        const { container } = render(
            <DataTable
                columns={columnsLocal}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).not.toHaveBeenCalled();
        expect(onHeaderCellClick).toHaveBeenCalled();
    });

    it('should support formatDataCellContent', async () => {
        const columnsLocal = [
            {
                title: 'Name',
                id: 'name',
            },
            {
                title: 'Age',
                id: 'age',
                sortable: true,
                formatDataCellContent: (value: any) => `${value} years`,
            },
            {
                title: 'Address',
                id: 'address',
            },
        ];

        const { container } = render(
            <DataTable columns={columnsLocal} data={dataSource} />,
        );

        const cell = container.querySelector(
            'td[data-rowid="1"][data-columnid="age"]',
        );
        expect(cell!.innerHTML).toEqual('32 years');
    });

    const expandableSectionColumns = [
        {
            title: 'Name',
            id: 'name',
            expandableSectionController: true,
        },
        {
            title: 'Age',
            id: 'age',
            sortable: true,
            formatDataCellContent: (value: any) => `${value} years`,
        },
        {
            title: 'Address',
            id: 'address',
        },
    ];

    it('should support expandable section', async () => {
        const { container, getByText } = render(
            <DataTable
                columns={expandableSectionColumns}
                data={dataSource}
                renderExpandableSection={item => (
                    <span>
                        {item.name} lives in {item.address}
                    </span>
                )}
            />,
        );

        const section = getByText('Jill lives in Raccoon City');
        expect(section).toBeInTheDocument();

        const sections = container.querySelectorAll(
            '.TableExpandableSection-Root',
        );
        expect(sections.length).toEqual(3);

        const controllers = container.querySelectorAll(
            '.TableControllerCell-Root',
        );
        expect(controllers.length).toEqual(3);
    });

    it('should expand a section by clicking on the controller, [uncontrolled]', async () => {
        const onSectionExpansionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={expandableSectionColumns}
                data={dataSource}
                defaultExpandedSectionIds={['2']}
                renderExpandableSection={() => <span>1</span>}
                onSectionExpansionChange={onSectionExpansionChange}
            />,
        );

        const controller = container.querySelector(
            '[data-rowid="3"] .TableControllerCell-Controller',
        );

        fireEvent.click(controller!);
        expect(onSectionExpansionChange).toHaveBeenCalledWith(['3', '2']);
    });

    it('should expand a section by clicking on the controller, [controlled]', async () => {
        const onSectionExpansionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={expandableSectionColumns}
                data={dataSource}
                expandedSectionIds={['2']}
                renderExpandableSection={() => <span>1</span>}
                onSectionExpansionChange={onSectionExpansionChange}
            />,
        );

        const controller = container.querySelector(
            '[data-rowid="3"] .TableControllerCell-Controller',
        );

        fireEvent.click(controller!);
        expect(onSectionExpansionChange).toHaveBeenCalledWith(['3', '2']);
    });

    it('should collapse a section by clicking on the controller, [uncontrolled]', async () => {
        const onSectionExpansionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={expandableSectionColumns}
                data={dataSource}
                defaultExpandedSectionIds={['2', '3']}
                renderExpandableSection={() => <span>1</span>}
                onSectionExpansionChange={onSectionExpansionChange}
            />,
        );

        const controller = container.querySelector(
            '[data-rowid="3"] .TableControllerCell-Controller',
        );

        fireEvent.click(controller!);
        expect(onSectionExpansionChange).toHaveBeenCalledWith(['2']);
    });

    it('should collapse a section by clicking on the controller, [controlled]', async () => {
        const onSectionExpansionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={expandableSectionColumns}
                data={dataSource}
                expandedSectionIds={['2', '3']}
                renderExpandableSection={() => <span>1</span>}
                onSectionExpansionChange={onSectionExpansionChange}
            />,
        );

        const controller = container.querySelector(
            '[data-rowid="3"] .TableControllerCell-Controller',
        );

        fireEvent.click(controller!);
        expect(onSectionExpansionChange).toHaveBeenCalledWith(['2']);
    });
});
