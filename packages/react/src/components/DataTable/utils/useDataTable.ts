import React, { useMemo } from 'react';
import { DataTablePropsType } from '../type';
import { useDataTableRowSorting } from './useDataTableRowSorting';
import { useDataTableRowSelection } from './useDataTableRowSelection';
import { useDataTableStickyColumns } from './useDataTableStickyColumns';
import { useDataTableExpandableSections } from './useDataTableExpandableSections';
import {
    DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE,
    DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_ROW_SELECTION,
} from '../constants';
import { DataTable } from '../DataTable';
import { useDataTablePageNavigation } from './useDataTablePageNavigation';

export const useDataTable = ({
    columns,
    data,
    tableProps,

    enableRowSelection,
    stickyHead,

    ...restProps
}: DataTablePropsType) => {
    // structure and data
    const columnsSafe = useMemo(() => columns || [], [columns]);
    const dataSafe = useMemo(() => data || [], [data]);

    const rowSorting = useDataTableRowSorting(columnsSafe, restProps);
    const rowSelection = useDataTableRowSelection(dataSafe, {
        enableRowSelection,
        ...rowSorting.restProps,
    });
    const stickyColumns = useDataTableStickyColumns(columnsSafe, {
        enableRowSelection,
        ...rowSelection.restProps,
    });
    const expandableSections = useDataTableExpandableSections(
        columnsSafe,
        stickyColumns.restProps,
    );

    const pageNavigation = useDataTablePageNavigation(
        expandableSections.restProps,
    );

    const columnCount = columnsSafe.length + (enableRowSelection ? 1 : 0);
    const enableFooter = pageNavigation.result.enablePageNavigation;

    return {
        columns: columnsSafe,
        data: dataSafe,

        ...rowSorting.result,
        ...rowSelection.result,
        ...expandableSections.result,
        ...pageNavigation.result,

        expandableSectionProps: {
            colSpan: columnCount,
            offsetLeft:
                DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE +
                (enableRowSelection
                    ? DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_ROW_SELECTION
                    : 0),
        },

        rootProps: pageNavigation.restProps,
        tableProps: {
            wide: true,
            stickyHead,
            ...tableProps,
            stickyColumns: stickyColumns.result.stickyColumns,
            horizontalScroll: stickyColumns.result.stickyColumns.length > 0,
        },

        enableFooter,
    };
};
