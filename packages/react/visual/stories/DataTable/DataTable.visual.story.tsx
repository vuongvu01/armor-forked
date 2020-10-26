import React, { useRef, useEffect } from 'react';

import { DataTable } from '../../../src/components';
import { dataSource, columns, dataSourceWide, columnsWide } from './demoData';
import { multiplyDataRows } from '../../../src/components/DataTable/__story__/utils';

export default {
    title: 'DataTable',
    component: DataTable,
};

export const TableWithCheckboxNothingChecked = () => (
    <DataTable columns={columns} data={dataSource} enableRowSelection />
);

export const TableWithCheckboxSomeChecked = () => (
    <DataTable
        columns={columns}
        data={dataSource}
        enableRowSelection
        defaultSelectedRowIds={['1', '2']}
    />
);

export const TableWithCheckboxAllChecked = () => (
    <DataTable
        columns={columns}
        data={dataSource}
        enableRowSelection
        defaultSelectedRowIds={['1', '2', '3']}
    />
);

export const StickyRightColumn = () => (
    <DataTable
        columns={columnsWide}
        data={dataSourceWide}
        horizontalScroll
        stickyRightColumn
        width="50rem"
    />
);

export const StickyRightColumnInvisible = () => {
    const ref = useRef();
    useEffect(() => {
        const table = ref.current;
        if (table) {
            // @ts-ignore
            table.scrollLeft = 9999999;
        }
    }, []);

    return (
        <DataTable
            columns={columnsWide}
            data={dataSourceWide}
            horizontalScroll
            stickyRightColumn
            width="50rem"
            ref={ref}
        />
    );
};

export const StickyLeftColumnInvisible = () => (
    <DataTable
        columns={columnsWide}
        data={dataSourceWide}
        horizontalScroll
        stickyLeftColumn
        width="50rem"
    />
);

export const StickyLeftColumn = () => {
    const ref = useRef();
    useEffect(() => {
        const table = ref.current;
        if (table) {
            // @ts-ignore
            table.scrollLeft = 200;
        }
    }, []);

    return (
        <DataTable
            columns={columnsWide}
            data={dataSourceWide}
            horizontalScroll
            stickyLeftColumn
            width="50rem"
            ref={ref}
        />
    );
};

export const StickyLeftColumnWithCheckboxes = () => {
    const ref = useRef();
    useEffect(() => {
        const table = ref.current;
        if (table) {
            // @ts-ignore
            table.scrollLeft = 200;
        }
    }, []);

    return (
        <DataTable
            columns={columnsWide}
            data={dataSourceWide}
            horizontalScroll
            stickyLeftColumn
            enableRowSelection
            width="50rem"
            ref={ref}
        />
    );
};

const largeData = multiplyDataRows(10, dataSource);

export const StickyHeaderOnWindowScroll = () => {
    useEffect(() => {
        window.scrollTo(0, 300);
    }, []);

    return (
        <DataTable
            columns={columns}
            data={largeData}
            stickyHead
            width="50rem"
        />
    );
};

export const SortingAsc = () => (
    <DataTable
        columns={columns}
        data={dataSource}
        defaultRowSortOrder={[['age', 'asc']]}
    />
);

export const SortingDesc = () => (
    <DataTable
        columns={columns}
        data={dataSource}
        defaultRowSortOrder={[['age', 'desc']]}
    />
);
