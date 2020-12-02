import { useMemo } from 'react';
import { DataTablePropsType } from '../type';
import { useDataTableRowSorting } from './useDataTableRowSorting';
import { useDataTableRowSelection } from './useDataTableRowSelection';
import { useDataTableStickyColumns } from './useDataTableStickyColumns';
import { useDataTableExpandableSections } from './useDataTableExpandableSections';
import {
    DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE,
    DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_ROW_SELECTION,
} from '../constants';

export const useDataTable = ({
    columns,
    data,

    enableRowSelection,

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

    const columnCount = columnsSafe.length + (enableRowSelection ? 1 : 0);

    return {
        columns: columnsSafe,
        data: dataSafe,

        ...rowSorting.result,
        ...rowSelection.result,
        stickyColumns: stickyColumns.result,
        ...expandableSections.result,

        expandableSectionProps: {
            colSpan: columnCount,
            offsetLeft:
                DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE +
                (enableRowSelection
                    ? DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_ROW_SELECTION
                    : 0),
        },

        restRootProps: expandableSections.restProps,
    };
};
