import { useMemo } from 'react';
import { DataTablePropsType } from '../type';
import { useDataTableRowSorting } from './useDataTableRowSorting';
import { useDataTableRowSelection } from './useDataTableRowSelection';
import { useDataTableStickyColumns } from './useDataTableStickyColumns';

export const useDataTable = ({
    columns,
    data,

    enableRowSelection,

    ...restRootProps
}: DataTablePropsType) => {
    // structure and data
    const columnsSafe = useMemo(() => columns || [], [columns]);
    const dataSafe = useMemo(() => data || [], [data]);

    const rowSorting = useDataTableRowSorting(restRootProps);
    const rowSelection = useDataTableRowSelection(dataSafe, {
        enableRowSelection,
        ...restRootProps,
    });
    const stickyColumns = useDataTableStickyColumns(columnsSafe, {
        enableRowSelection,
        ...restRootProps,
    });

    return {
        columns: columnsSafe,
        data: dataSafe,

        ...rowSorting,
        ...rowSelection,

        stickyColumns,

        restRootProps,
    };
};
