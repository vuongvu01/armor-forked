/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';

import { cleanup, fireEvent, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { DataTable } from '../..';
import { dataSource, columns } from '../__story__/demoData';

describe('<DataTable />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<DataTable />);
    });

    it('should contain correct CSS classes and properties', () => {
        let result = render(<DataTable />);

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('DataTable', {
            Root: [],
        });

        result = render(<DataTable enablePageNavigation />);

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('DataTable', {
            Root: [],
            Footer: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<DataTable ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
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

    it('should support disabling header', async () => {
        let result = render(<DataTable columns={columns} data={dataSource} />);
        let head = result.container.querySelector('.TableHead-Root');
        expect(head).toBeInTheDocument();

        result = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableHeader={false}
            />,
        );
        head = result.container.querySelector('.TableHead-Root');
        expect(head).not.toBeInTheDocument();
    });
});
