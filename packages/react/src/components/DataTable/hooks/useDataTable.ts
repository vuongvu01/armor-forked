import { useMemo } from 'react';
import {
    DataTableColumnType,
    DataTableDataType,
    DataTablePropsType,
} from '../type';
import { useDataTableRowSorting } from './useDataTableRowSorting';
import { useDataTableRowSelection } from './useDataTableRowSelection';
import { useDataTableStickyColumns } from './useDataTableStickyColumns';
import { useDataTableExpandableSections } from './useDataTableExpandableSections';
import {
    DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE,
    DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_ROW_SELECTION,
} from '../constants';
import { useDataTablePageNavigation } from './useDataTablePageNavigation';
import { ReferenceType } from '../../../type';
import { TableCell, TableControllerCell, TableHeadCell } from '../../Table';

export const useDataTable = (
    {
        columns,
        data,
        tableProps,

        enableHeader,
        enableRowSelection,
        stickyHead,

        ...restProps
    }: DataTablePropsType,
    ref: ReferenceType,
) => {
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

    const {
        enableExpandableSections,
        expandableSectionControllers,
        onExpansionSectionControllerTriggerClick,
        expandedSectionIds,
    } = expandableSections.result;

    const { rowSortOrder, onHeadCellClick } = rowSorting.result;

    return {
        columns: columnsSafe,
        data: dataSafe,

        ...rowSorting.result,
        ...rowSelection.result,
        ...expandableSections.result,
        ...pageNavigation.result,

        rootProps: { ref, ...pageNavigation.restProps },
        tableProps: {
            wide: true,
            stickyHead,
            ...tableProps,
            stickyColumns: stickyColumns.result.stickyColumns,
            horizontalScroll: stickyColumns.result.stickyColumns.length > 0,
        },
        getRowProps: (item: DataTableDataType) => {
            return {
                'data-rowid': item.id,
            };
        },
        getHeadCellProps: (column: DataTableColumnType) => {
            const isController =
                enableExpandableSections &&
                expandableSectionControllers[column.id];
            const paddingLeft = isController
                ? DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE
                : undefined;

            const { id, sortType, cellProps, headCellProps } = column;

            return {
                ...cellProps,
                ...headCellProps,
                paddingLeft,
                columnId: id,
                'data-columnid': id,
                sortable: true,
                rowSortType: sortType,
                rowSortOrder,
                onClick: onHeadCellClick,
            };
        },
        getCellProps: (
            column: DataTableColumnType,
            item: DataTableDataType,
        ) => {
            const isSectionExpanded =
                enableExpandableSections &&
                expandedSectionIds.includes(item.id.toString());

            return {
                ...column.cellProps,
                ...column.dataCellProps,
                ...(column.getDataCellProps
                    ? column.getDataCellProps(item[column.id], item, column)
                    : {}),
                'data-rowid': item.id,
                'data-columnid': column.id,
                rowId: item.id,

                // if a cell contains an expansion controller
                onTriggerClick: onExpansionSectionControllerTriggerClick,
                expanded: isSectionExpanded,
            };
        },
        getExpandableSectionProps: (item: DataTableDataType) => {
            const isSectionExpanded =
                enableExpandableSections &&
                expandedSectionIds.includes(item.id.toString());

            return {
                colSpan: columnCount,
                offsetLeft:
                    DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE +
                    (enableRowSelection
                        ? DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_ROW_SELECTION
                        : 0),
                expanded: isSectionExpanded,
                'data-expandablesectionid': item.id,
            };
        },

        getCellTag: (column: DataTableColumnType) => {
            const isController =
                enableExpandableSections &&
                expandableSectionControllers[column.id];

            return isController ? TableControllerCell : TableCell;
        },
        getHeadCellTag: (column: DataTableColumnType) => {
            return column.sortable ? TableHeadCell : TableCell;
        },

        enableHeader: enableHeader !== false,
        enableFooter,
    };
};
