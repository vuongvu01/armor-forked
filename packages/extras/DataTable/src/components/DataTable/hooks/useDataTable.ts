import { RefObject, useMemo, useRef } from 'react';
import { useRootRef, useVirtualization } from '@deliveryhero/armor-system';
import {
    TableCell,
    TableControllerCell,
    TableHeadCell,
    EmptyStatePropsType,
} from '@deliveryhero/armor';

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

        enableRowReordering,
        onRowOrderChange,

        actions,
        enableActionSheet,

        enableVirtualization,
        averageItemHeight,
        parentContainerRef,

        enableFixedLayout,

        empty,

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

    const actionSheetLabel = useMemo(
        () => formatActionSheetLabel(rowSelection.selectedRowIdsActual),
        [rowSelection],
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

    const hasHorizontalScroll =
        stickyColumns.result.stickyColumns.length > 0 ||
        tableProps?.horizontalScroll;

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

        enableRowReordering,
        onRowOrderChange,

        selectedRowIds: rowSelection.selectedRowIds,
        unselectRows: rowSelection.unselectRows,

        rootProps: { ...pageNavigation.restProps, ref: innerRef },
        tableProps: {
            wide: true,
            stickyHead,
            enableFixedLayout,
            ...tableProps,
            stickyColumns: stickyColumns.result.stickyColumns,
            horizontalScroll: hasHorizontalScroll,
        },
        tableBodyProps: {
            ref: tableBodyRef,
        },
        getRowProps: (item: DataTableDataType) => {
            return {
                'data-rowid': item.id,
                onClick: item?.onClick,
            };
        },
        getHeadCellProps: ({
            id,
            sortType,
            cellProps,
            headCellProps,
            width,
        }: DataTableColumnType) => {
            const isController =
                enableExpandableSections && expandableSectionControllers[id];
            const paddingLeft = isController
                ? DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE
                : undefined;

            return {
                width,
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
            const {
                id,
                cellProps,
                dataCellProps,
                getDataCellProps,
                width,
                ellipsis,
                contentAlignY,
            } = column;

            const { id: itemId } = item;

            const isSectionExpanded =
                enableExpandableSections &&
                expandedSectionIds.includes(itemId.toString());

            return {
                ellipsis,
                width,
                contentAlignY,
                ...cellProps,
                ...dataCellProps,
                ...(getDataCellProps?.(item[id], item, column) ?? {}),
                'data-rowid': itemId,
                'data-columnid': id,
                rowId: itemId,

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

        enableEmpty: !!empty,
        enableBody: !empty,

        getEmptyStateCellProps: () => ({
            colSpan:
                columnsSafe.length +
                (rowSelection.result.enableRowSelection ? 1 : 0),
        }),
        getEmptyStateProps: () => ({
            enableImage: false,
            enableTitle: false,
            descriptionPosition:
                'middle' as EmptyStatePropsType['descriptionPosition'],
            description: 'No data',
        }),
    };
};
