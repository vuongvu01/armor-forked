/* eslint-disable no-console,import/no-unresolved, import/no-extraneous-dependencies */

import React, {
    useCallback,
    useContext,
    useRef,
    useState,
    useMemo,
} from 'react';
import cloneDeep from 'lodash/cloneDeep';
import styled from 'styled-components';
import { ScalarType } from '@deliveryhero/armor-system';

import { Button } from '@deliveryhero/armor';
import {
    columns,
    columnsWide,
    dataSource,
    longDataSource,
    dataSourceWide,
    dataSourceWithNumberIds,
    columnsWithUrl,
    dataSourceWithUrl,
    columnsWideWithWidth,
    dataSourceWideWithLongName,
} from './demoData';
import { DataTable } from '../DataTable';
import { getSortingFunction } from '../utils/getSortingFunction';
import { multiplyDataRows } from './utils';
import { withWrapper } from '../../../helpers/Wrapper';
import { DataTableContext } from '../DataTableContext';

const initialRowSelection = ['2'];

export default {
    title: 'Extras/DataTable',
    component: DataTable,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return <DataTable columns={columns} data={data} />;
};

export const HorizontalScroll = () => {
    const [data] = useState(dataSourceWide);

    return (
        <DataTable
            columns={columnsWide}
            data={data}
            tableProps={{ horizontalScroll: true }}
        />
    );
};

export const RowReordering = () => {
    const [data, setData] = useState(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableRowReordering
            onRowOrderChange={setData as any}
        />
    );
};

export const RowReorderingWithNumberIds = () => {
    const [data, setData] = useState(dataSourceWithNumberIds);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableRowReordering
            onRowOrderChange={setData as any}
        />
    );
};

export const RowReorderingWithScroll = () => {
    const [data, setData] = useState(longDataSource);

    return (
        <DataTable
            stickyHead
            columns={columns}
            data={data}
            enableRowReordering
            onRowOrderChange={setData as any}
        />
    );
};

export const RowReorderingWithInteractiveContent = () => {
    const [data, setData] = useState(dataSource);

    const columnsInteractive = useMemo(() => {
        const c = cloneDeep(columns);
        c[1].formatDataCellContent = (value: string) => (
            // eslint-disable-next-line no-alert
            <button onClick={() => alert(value)}>{value}</button>
        );
        return c;
    }, []);

    return (
        <DataTable
            stickyHead
            columns={columnsInteractive}
            data={data}
            enableRowReordering
            onRowOrderChange={setData as any}
        />
    );
};

export const RowReorderingWithSelection = () => {
    const [data, setData] = useState(longDataSource);

    return (
        <DataTable
            stickyHead
            columns={columns}
            data={data}
            enableRowSelection
            enableRowReordering
            onRowOrderChange={setData as any}
        />
    );
};

export const RowSortingUncontrolled = () => {
    const [data, setData] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            defaultRowSortOrder={[['age', 'asc']]}
            onRowSortOrderChange={(newWorldOrder) => {
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
            onRowSortOrderChange={(newWorldOrder) => {
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
            onRowSortOrderChange={(newWorldOrder) => {
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
            onRowSelectionChange={(selection) => {
                console.log('new selection');
                console.log(selection);
            }}
        />
    );
};

// @ts-ignore
const DeleteSelectedItemsButton = ({ children, setData }) => {
    const { selectedRowIds, data, unselectRows } = useContext(DataTableContext);

    const handleDelete = () => {
        const newData: any = [];
        // @ts-ignore
        data.forEach((dataItem) => {
            if (!selectedRowIds.includes(dataItem.id)) {
                newData.push(dataItem);
            }
        });

        setData(newData);
        unselectRows();
    };

    return <Button onClick={handleDelete}>{children}</Button>;
};

// @ts-ignore
const HideSelectedItemsButton = ({ children, ...restProps }) => {
    const { unselectRows } = useContext(DataTableContext);

    const hideActionSheet = () => {
        unselectRows();
    };

    return (
        <Button onClick={hideActionSheet} {...restProps}>
            {children}
        </Button>
    );
};

export const RowSelectionWithActionSheetUncontrolled = () => {
    const [data, setData] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableRowSelection
            enableActionSheet={true}
            actions={
                <div>
                    <HideSelectedItemsButton marginRight={4} tertiary>
                        Cancel
                    </HideSelectedItemsButton>
                    <DeleteSelectedItemsButton setData={setData}>
                        Delete
                    </DeleteSelectedItemsButton>
                </div>
            }
            defaultSelectedRowIds={initialRowSelection}
        />
    );
};

export const RowSelectionWithActionSheetControlled = () => {
    const [data, setData] = useState<typeof dataSource>(dataSource);
    const [selectedRows, setSelectedRows] =
        useState<ScalarType[]>(initialRowSelection);

    const handleDelete = () => {
        const newData: any = [];
        data.forEach((dataItem) => {
            if (!selectedRows.includes(dataItem.id)) {
                newData.push(dataItem);
            }
        });

        setData(newData);
        setSelectedRows([]);
    };

    const clearSelection = () => {
        setSelectedRows([]);
    };

    // @ts-ignore
    const handleRowSelectionChange = (selection) => setSelectedRows(selection);

    return (
        <DataTable
            columns={columns}
            data={data}
            enableRowSelection
            enableActionSheet={!!selectedRows.length}
            actions={
                <div>
                    <Button marginRight={4} tertiary onClick={clearSelection}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
            }
            selectedRowIds={selectedRows}
            onRowSelectionChange={handleRowSelectionChange}
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
            onRowSelectionChange={(selection) => {
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
            onRowSelectionChange={(selection) => {
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
            onRowSelectionChange={(selection) => {
                console.log('new selection');
                console.log(selection);
            }}
            stickyLeftColumn
            stickyRightColumn
            width="100%"
        />
    );
};

const StyledDataTable = styled(DataTable)`
    .Table-Root {
        border: 1px solid #dbdbdb;
    }

    .TableHead-Root {
        position: relative;

        &:after {
            content: '';

            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;

            height: 4px;
            background: #dbdbdb;
        }
    }

    th.TableCell-Root {
        background: #f4f4f4;

        &::before {
            background: #f4f4f4;
        }
    }

    .TableCell-Root--sticky::after {
        box-shadow: none;
        border: none;
        background: #dbdbdb;
        width: 4px;
        height: 100%;
    }

    th.TableCell-Root--stickyRightColumn::after,
    td.TableCell-Root--stickyRightColumn::after {
        left: 0;
    }

    th.TableCell-Root--stickyLeftColumn::after,
    td.TableCell-Root--stickyLeftColumn::after {
        right: 0;
    }

    .TableBody-Root .TableCell-Root {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;

export const CustomStyledWithStickyColumns = () => {
    const [data] = useState<typeof largeData2>(dataSourceWideWithLongName);

    return (
        <StyledDataTable
            columns={columnsWideWithWidth}
            data={data}
            width="100%"
            stickyLeftColumn
            stickyRightColumn
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
            onRowSelectionChange={(selection) => {
                console.log('new selection');
                console.log(selection);
            }}
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
            renderExpandableSection={(item) => {
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
            onRowSelectionChange={(selection) => {
                console.log('new selection');
                console.log(selection);
            }}
            defaultExpandedSectionIds={['3']}
            expandableSectionControllerColumnId="name"
            renderExpandableSection={(item) => {
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
            onRowSelectionChange={(selection) => {
                console.log('new selection');
                console.log(selection);
            }}
            defaultExpandedSectionIds={['3']}
            expandableSectionControllerColumnId="age"
            renderExpandableSection={(item) => {
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
            onRowSelectionChange={(selection) => {
                console.log('new selection');
                console.log(selection);
            }}
            defaultExpandedSectionIds={['2']}
            renderExpandableSection={(item) => {
                return (
                    <>
                        {item.name} is {item.age} years old and he/she lives in{' '}
                        {item.address}
                    </>
                );
            }}
            onSectionExpansionChange={(expansion) => {
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

export const WithPageNavigationPropsObject = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    const [page, setPage] = useState(1);
    const onPageChange = useCallback(
        (pageNumber: number) => {
            console.log(pageNumber);
            setPage(pageNumber);
        },
        [setPage],
    );

    const pageNavigationProps = useMemo(
        () => ({
            itemCount: 300,
            pageNumber: page,
            onPageNumberChange: onPageChange,
            enablePageSizeSelector: true,
            onPageSizeChange: (newSize: number) => console.log(newSize),
        }),
        [page, onPageChange],
    );

    return (
        <DataTable
            columns={columns}
            data={data}
            enablePageNavigation
            pageNavigationProps={pageNavigationProps}
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
        getDataCellProps: (value: string) => {
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

const massiveData: typeof dataSource = [];
for (let i = 0; i < 3000; i += 1) {
    massiveData.push({
        id: `id_${i}`,
        name: `King Edward the ${i}`,
        age: Math.floor(Math.random() * 100),
        address: '10 Downing Street',
    });
}

export const MassiveTable = () => {
    return (
        <DataTable
            columns={columns}
            data={massiveData}
            stickyHead
            enableVirtualization
        />
    );
};

export const MassiveTableWithItemHeight = () => {
    return (
        <DataTable
            columns={columns}
            data={massiveData}
            stickyHead
            enableVirtualization
            averageItemHeight={65}
        />
    );
};

export const MassiveTableAndExpandableRow = () => {
    return (
        <DataTable
            columns={columns}
            data={massiveData}
            stickyHead
            enableVirtualization
            enableExpandableSections
            renderExpandableSection={(item: any) => {
                return (
                    <>
                        {item.name} is {item.age} years old and he lives in{' '}
                        {item.address}
                    </>
                );
            }}
        />
    );
};

export const MassiveTableInAWrapper = () => {
    const wrapperRef = useRef(null);
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <div
                style={{
                    overflowY: 'scroll',
                    height: '20rem',
                    marginTop: '1rem',
                }}
                ref={wrapperRef}
            >
                <DataTable
                    columns={columns}
                    data={massiveData}
                    enableVirtualization
                    parentContainerRef={wrapperRef}
                />
            </div>
        </>
    );
};

export const EmptyState = () => {
    return <DataTable columns={columns} data={massiveData} empty />;
};

export const EnableRowClick = () => {
    return <DataTable columns={columnsWithUrl} data={dataSourceWithUrl} />;
};
