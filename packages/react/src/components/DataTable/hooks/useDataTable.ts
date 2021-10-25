import { RefObject, useMemo, useRef } from 'react';
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
    DATA_TABLE_EMPTY_COLUMNS,
    DATA_TABLE_EMPTY_DATA,
    DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE,
    DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_ROW_SELECTION,
} from '../constants';
import { useDataTablePageNavigation } from './useDataTablePageNavigation';
import { TableCell, TableControllerCell, TableHeadCell } from '../../Table';
import { useRootRef, useVirtualization } from '../../../system';
import { RefType } from '../../../type';
import { formatActionSheetLabel } from '../utils/formatActionSheetLabel';

export const useDataTable = (
    {
        columns,
        data,
        tableProps,

        enableHeader,
        enableRowSelection,
        stickyHead,

        actions,
        enableActionSheet,

        enableVirtualization,
        averageItemHeight,
        parentContainerRef,

        enableFixedLayout,

        ...restProps
    }: DataTablePropsType,
    ref: RefType<HTMLDivElement>,
) => {
    const innerRef = useRootRef<HTMLDivElement>(ref);
    const tableBodyRef = useRef<HTMLTableSectionElement>(null);

    const columnsSafe = columns || DATA_TABLE_EMPTY_COLUMNS;
    const dataSafe = data || DATA_TABLE_EMPTY_DATA;

    const rowSorting = useDataTableRowSorting(columnsSafe, restProps);
    const rowSelection = useDataTableRowSelection(dataSafe, {
        enableRowSelection,
        ...rowSorting.restProps,
    });

    let actionSheetLabel = '' as string | undefined;

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

    const {
        data: virtualData,
        bottomOffset: virtualBottomOffset,
        topOffset: virtualTopOffset,
        rangeStart: virtualRangeStart,
    } = useVirtualization<DataTableDataType, HTMLTableSectionElement>(
        !!enableVirtualization,
        tableBodyRef,
        dataSafe,
        {
            averageItemHeight,
            itemSelector: '.DataTable-Row',
            parentContainerRef: parentContainerRef as RefObject<HTMLElement>,
        },
    );

    useMemo(() => {
        actionSheetLabel = formatActionSheetLabel(
            rowSelection.selectedRowIdsActual,
        );

        return actionSheetLabel;
    }, [rowSelection]);

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
        data: virtualData,

        actions,
        actionSheetProps: { label: actionSheetLabel },
        isActionSheetVisible: enableActionSheet && actionSheetLabel,

        // todo: since we strip off any custom props, this may be refactored and made easier
        ...rowSorting.result,
        ...rowSelection.result,
        ...expandableSections.result,
        ...pageNavigation.result,

        selectedRowIds: rowSelection.selectedRowIds,
        unselectRows: rowSelection.unselectRows,

        rootProps: { ...pageNavigation.restProps, ref: innerRef },
        tableProps: {
            wide: true,
            stickyHead,
            enableFixedLayout,
            ...tableProps,
            stickyColumns: stickyColumns.result.stickyColumns,
            horizontalScroll: stickyColumns.result.stickyColumns.length > 0,
        },
        tableBodyProps: {
            ref: tableBodyRef,
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
                ellipsis: column.ellipsis,
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

        enableVirtualization,
        getVirtualTopSpaceProps: () => ({ height: virtualTopOffset }),
        getVirtualBottomSpaceProps: () => ({
            height: virtualBottomOffset,
        }),
        getRowNumber: (index: number) => index + virtualRangeStart,
        initialDataLength: dataSafe.length,
    };
};
