/* eslint-disable no-console,import/no-unresolved, import/no-extraneous-dependencies */

import React, { useCallback, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import cloneDeep from 'clone-deep';
import styled from 'styled-components';
import { dataSource, dataSourceWide, columns, columnsWide } from './demoData';

import { DataTable } from '../DataTable';
import { getSortingFunction } from '../utils/getSortingFunction';
import { ObjectLiteralType, ScalarType } from '../../../type';
import { multiplyDataRows } from './utils';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/DataTable',
    component: DataTable,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Basic = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return <DataTable columns={columns} data={data} />;
};

export const RowSortingUncontrolled = () => {
    const [data, setData] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            defaultRowSortOrder={[['age', 'asc']]}
            onRowSortOrderChange={newWorldOrder => {
                if (newWorldOrder.length) {
                    const field = newWorldOrder[0][0];
                    const order = newWorldOrder[0][1];

                    const sortingFunction = getSortingFunction(
                        field === 'id' ? 'numerical' : 'alphabetical',
                    );

                    setData(
                        [...dataSource].sort((a, b) => {
                            // @ts-ignore
                            const valueA = a[field];
                            // @ts-ignore
                            const valueB = b[field];
                            return sortingFunction(valueA, valueB, order);
                        }),
                    );
                } else {
                    // unsorted
                    setData(dataSource);
                }
            }}
        />
    );
};

export const RowSortingControlled = () => {
    const [data, setData] = useState<typeof dataSource>(dataSource);
    const [sorting, setSorting] = useState<any[]>([]);

    return (
        <DataTable
            columns={columns}
            data={data}
            rowSortOrder={sorting}
            onRowSortOrderChange={newWorldOrder => {
                if (newWorldOrder.length) {
                    const field = newWorldOrder[0][0];
                    const order = newWorldOrder[0][1];

                    const sortingFunction = getSortingFunction(
                        field === 'id' ? 'numerical' : 'alphabetical',
                    );

                    setData(
                        [...dataSource].sort((a, b) => {
                            // @ts-ignore
                            const valueA = a[field];
                            // @ts-ignore
                            const valueB = b[field];
                            return sortingFunction(valueA, valueB, order);
                        }),
                    );
                } else {
                    // unsorted
                    setData(dataSource);
                }

                setSorting(newWorldOrder);
            }}
        />
    );
};

export const RowSortingNoUnsortedState = () => {
    const [data, setData] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            defaultRowSortOrder={[['age', 'asc']]}
            enableNeutralRowSorting={false}
            onRowSortOrderChange={newWorldOrder => {
                if (newWorldOrder.length) {
                    const field = newWorldOrder[0][0];
                    const order = newWorldOrder[0][1];

                    const sortingFunction = getSortingFunction(
                        field === 'id' ? 'numerical' : 'alphabetical',
                    );

                    setData(
                        [...dataSource].sort((a, b) => {
                            // @ts-ignore
                            const valueA = a[field];
                            // @ts-ignore
                            const valueB = b[field];
                            return sortingFunction(valueA, valueB, order);
                        }),
                    );
                } else {
                    // unsorted
                    setData(dataSource);
                }
            }}
        />
    );
};

export const RowSelectionUncontrolled = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableRowSelection
            defaultSelectedRowIds={['2']}
            onRowSelectionChange={selection => {
                console.log('new selection');
                console.log(selection);
            }}
        />
    );
};

export const RowSelectionControlled = () => {
    const [data] = useState<typeof dataSource>(dataSource);
    const [selection, setSelection] = useState<ScalarType[]>(['2']);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableRowSelection
            selectedRowIds={selection}
            onRowSelectionChange={setSelection}
        />
    );
};

const largeData1 = multiplyDataRows(10, dataSource);

export const RowSelectionAndStickyHead = () => {
    const [data] = useState<typeof largeData1>(largeData1);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableRowSelection
            defaultSelectedRowIds={['2_0']}
            onRowSelectionChange={selection => {
                console.log('new selection');
                console.log(selection);
            }}
            stickyHead
        />
    );
};

export const RowSelectionAndNoStickyHead = () => {
    const [data] = useState<typeof largeData1>(largeData1);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableRowSelection
            defaultSelectedRowIds={['2_0']}
            onRowSelectionChange={selection => {
                console.log('new selection');
                console.log(selection);
            }}
        />
    );
};

const largeData2 = multiplyDataRows(10, dataSourceWide);

export const RowSelectionAndStickyColumns = () => {
    const [data] = useState<typeof largeData1>(largeData2);

    return (
        <DataTable
            columns={columnsWide}
            data={data}
            enableRowSelection
            defaultSelectedRowIds={['2_0']}
            onRowSelectionChange={selection => {
                console.log('new selection');
                console.log(selection);
            }}
            stickyLeftColumn
            stickyRightColumn
            horizontalScroll
            width="50rem"
        />
    );
};

export const RowSelectionAndNoStickyColumns = () => {
    const [data] = useState<typeof largeData1>(largeData2);

    return (
        <DataTable
            columns={columnsWide}
            data={data}
            enableRowSelection
            defaultSelectedRowIds={['2_0']}
            onRowSelectionChange={selection => {
                console.log('new selection');
                console.log(selection);
            }}
            horizontalScroll
            width="50rem"
        />
    );
};

export const WithExtraRows = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            defaultExpandedSectionIds={['3']}
            expandableSectionControllerColumnId="name"
            renderExpandableSection={item => {
                return (
                    <>
                        {item.name} is {item.age} years old and he/she lives in{' '}
                        {item.address}
                    </>
                );
            }}
        />
    );
};

export const WithExtraRowsAndRowSelection = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableRowSelection
            defaultSelectedRowIds={['2']}
            onRowSelectionChange={selection => {
                console.log('new selection');
                console.log(selection);
            }}
            defaultExpandedSectionIds={['3']}
            expandableSectionControllerColumnId="name"
            renderExpandableSection={item => {
                return (
                    <>
                        {item.name} is {item.age} years old and he/she lives in{' '}
                        {item.address}
                    </>
                );
            }}
        />
    );
};

export const WithExtraRowsAndRowSelectionTriggerAge = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableRowSelection
            defaultSelectedRowIds={['2']}
            onRowSelectionChange={selection => {
                console.log('new selection');
                console.log(selection);
            }}
            defaultExpandedSectionIds={['3']}
            expandableSectionControllerColumnId="age"
            renderExpandableSection={item => {
                return (
                    <>
                        {item.name} is {item.age} years old and he/she lives in{' '}
                        {item.address}
                    </>
                );
            }}
        />
    );
};

export const WithRowSelectionAndMultipleExpansionControllers = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    const columnsLocal = cloneDeep(columns);
    // @ts-ignore
    columnsLocal[0].expandableSectionController = true;
    // @ts-ignore
    columnsLocal[2].expandableSectionController = true;

    return (
        <DataTable
            columns={columnsLocal}
            data={data}
            enableRowSelection
            defaultSelectedRowIds={['2']}
            onRowSelectionChange={selection => {
                console.log('new selection');
                console.log(selection);
            }}
            defaultExpandedSectionIds={['2']}
            renderExpandableSection={item => {
                return (
                    <>
                        {item.name} is {item.age} years old and he/she lives in{' '}
                        {item.address}
                    </>
                );
            }}
            onSectionExpansionChange={expansion => {
                console.log(expansion);
            }}
        />
    );
};

export const WithPageNavigation = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    const [page, setPage] = useState(1);
    const onPageChange = useCallback(
        (pageNumber: number) => {
            console.log(pageNumber);
            setPage(pageNumber);
        },
        [setPage],
    );

    return (
        <DataTable
            columns={columns}
            data={data}
            enablePageNavigation
            pageNavigationItemCount={300}
            pageNavigationPageNumber={page}
            onPageNavigationPageSelect={onPageChange}
        />
    );
};

export const WithPageNavigationAndPageSelector = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    const [page, setPage] = useState(1);
    const onPageChange = useCallback(
        (pageNumber: number) => {
            console.log(pageNumber);
            setPage(pageNumber);
        },
        [setPage],
    );

    const [pageSize, setPageSize] = useState(100);

    return (
        <DataTable
            columns={columns}
            data={data}
            enablePageNavigation
            pageNavigationItemCount={300}
            pageNavigationPageNumber={page}
            onPageNavigationPageSelect={onPageChange}
            enablePageNavigationPageSizeSelector
            pageNavigationPageSize={pageSize}
            pageNavigationPageSizeList={[
                { label: '100', value: 100 },
                { label: '200', value: 200 },
            ]}
            onPageNavigationPageSizeChange={setPageSize}
        />
    );
};

export const NoHeader = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableHeader={false}
            enableRowSelection
        />
    );
};

const CustomDataTable = styled(DataTable)`
    .TableControllerCell-Root:first-child {
        .TableControllerCell-Container {
            color: red;
        }
    }
`;

export const OverrideFirstColumn = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return (
        <CustomDataTable
            columns={columns}
            data={data}
            enableExpandableSections
        />
    );
};

const columnsWithCustomProps = [
    {
        title: 'Name',
        id: 'name',
        getDataCellProps: (
            value: string,
            item: { id: string | number } & ObjectLiteralType,
        ) => {
            if (value.startsWith('M')) {
                return {
                    enableTriggerVisibility: false,
                };
            }

            return {};
        },
    },
    {
        title: 'Age',
        id: 'age',
        sortable: true,
        formatDataCellContent: (value: string) => `${value} years`,
    },
    {
        title: 'Address',
        sortable: true,
        id: 'address',
    },
];

export const ConditionalExpansion = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columnsWithCustomProps}
            data={data}
            enableExpandableSections
        />
    );
};

export const ExpandableSectionWithNumbers = () => {
    const columns1 = [
        {
            title: 'Name',
            id: 'name',
            expandableSectionController: true,
        },
        {
            title: 'Age',
            id: 'age',
        },
        {
            title: 'Address',
            id: 'address',
        },
    ];

    const dataSource1 = [
        {
            id: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            id: 3,
            name: 'Jill',
            age: 19,
            address: 'Raccoon City',
        },
        {
            id: 2,
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const [data] = useState(dataSource1);
    const [expandedSections, setExpandedSections] = useState<
        Array<string | number>
    >(['3']);

    return (
        <DataTable
            columns={columns1}
            data={data}
            width="30rem"
            expandedSectionIds={expandedSections}
            onSectionExpansionChange={setExpandedSections}
            renderExpandableSection={(item: any) => {
                return (
                    <>
                        {item.name} is {item.age} years old and he/she lives in{' '}
                        {item.address}
                    </>
                );
            }}
        />
    );
};
