import { useMemo } from 'react';
import { DataTablePropsType } from '../type';
import { useDataTableRowSorting } from './useDataTableRowSorting';
import { useDataTableRowSelection } from './useDataTableRowSelection';
import { useDataTableStickyColumns } from './useDataTableStickyColumns';

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

    return {
        columns: columnsSafe,
        data: dataSafe,

        ...rowSorting.result,
        ...rowSelection.result,
        stickyColumns: stickyColumns.result,

        restRootProps: stickyColumns.restProps,
    };
};
