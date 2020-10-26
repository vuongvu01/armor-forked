import { useMemo } from 'react';
import { DataTableColumnType, DataTablePropsType } from '../type';
import { TableStickyColumnsMap } from '../../Table/type';
import { TABLE_CHECKBOX_CELL_WIDTH } from '../../Table/TableCheckboxCell/constants';
import { LEFT, RIGHT } from '../../../constants';

export const useDataTableStickyColumns = (
    columnsSafe: DataTableColumnType[],
    {
        stickyLeftColumn,
        stickyRightColumn,
        enableRowSelection,
    }: DataTablePropsType,
) => {
    return useMemo<TableStickyColumnsMap>(() => {
        const columnMap: TableStickyColumnsMap = [];
        if (stickyLeftColumn) {
            columnMap.push({
                index: 0,
                alignment: LEFT,
                offset: 0,
            });
            if (enableRowSelection) {
                columnMap.push({
                    index: 1,
                    alignment: LEFT,
                    offset: TABLE_CHECKBOX_CELL_WIDTH,
                });
            }
        }

        if (stickyRightColumn && columnsSafe.length > 1) {
            columnMap.push({
                index: columnsSafe.length - (enableRowSelection ? 0 : 1),
                alignment: RIGHT,
                offset: 0,
            });
        }

        return columnMap;
    }, [stickyLeftColumn, stickyRightColumn, enableRowSelection, columnsSafe]);
};
