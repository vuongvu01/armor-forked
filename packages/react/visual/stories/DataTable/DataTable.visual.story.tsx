import React, { useRef, useEffect, useState, useCallback } from 'react';

import { DataTable } from '../../../src/components';
import {
    dataSource,
    columns,
    dataSourceWide,
    columnsWide,
    columnsWithConditionalExpansionTrigger,
} from './demoData';
import { multiplyDataRows } from '../../../src/components/DataTable/__story__/utils';
import { DarkBackground } from '../../../src/helpers/DarkBackground';

export default {
    title: 'DataTable',
    component: DataTable,
};

export const TableWithOnDark = () => (
    <DarkBackground>
        <DataTable columns={columns} data={dataSource} enableRowSelection />
    </DarkBackground>
);

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
        const root = (ref.current as unknown) as HTMLDivElement;
        if (root) {
            const table = root.querySelector('table');
            // TODO (nmelnikov 2020-12-18): for some reason the snapshot is being taken before the end of the
            // scroll destination is reached. The wrap with a setTimeout doesn't make much sense, but seems
            // to compensate the issue. Even though in storybook dashboard - the final state is reached...
            setTimeout(() => {
                // @ts-ignore
                table.scrollLeft = 9999999;
            }, 100);
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
        const root = (ref.current as unknown) as HTMLDivElement;
        if (root) {
            const table = root.querySelector('table');
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
        const root = (ref.current as unknown) as HTMLDivElement;
        if (root) {
            const table = root.querySelector('table');
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

export const ExpandableSection = () => {
    return (
        <DataTable
            columns={columns}
            data={dataSource}
            defaultRowSortOrder={[['age', 'desc']]}
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

export const ExpandableSectionTriggerMiddle = () => {
    return (
        <DataTable
            columns={columns}
            data={dataSource}
            defaultRowSortOrder={[['age', 'desc']]}
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

export const ExpandableSectionAndSelectableRows = () => {
    return (
        <DataTable
            columns={columns}
            data={dataSource}
            defaultRowSortOrder={[['age', 'desc']]}
            enableRowSelection
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

export const PageNavigation = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            enablePageNavigation
            pageNavigationItemCount={300}
            pageNavigationPageNumber={3}
        />
    );
};

export const PageNavigationPageSelector = () => {
    const [data] = useState<typeof dataSource>(dataSource);

    return (
        <DataTable
            columns={columns}
            data={data}
            enablePageNavigation
            pageNavigationItemCount={300}
            pageNavigationPageNumber={3}
            enablePageNavigationPageSizeSelector
            pageNavigationPageSize={100}
            pageNavigationPageSizeList={[
                { label: '100', value: 100 },
                { label: '200', value: 200 },
            ]}
        />
    );
};

export const NoHeader = () => (
    <DataTable columns={columns} data={dataSource} enableHeader={false} />
);

export const ConditionalExpansionTrigger = () => (
    <DataTable
        columns={columnsWithConditionalExpansionTrigger}
        data={dataSource}
        enableExpandableSections
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
