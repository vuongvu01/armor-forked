import { useCallback, useState, MouseEvent } from 'react';
import { TableHeadCellRowSortOrderType } from '../../Table/TableHeadCell/type';
import { DataTableColumnType, DataTablePropsType } from '../type';
import {
    TABLE_SORTING_DIRECTION_ASC,
    TABLE_SORTING_DIRECTION_DESC,
} from '../../Table/constants';

export const useDataTableRowSorting = (
    columnsSafe: DataTableColumnType[],
    {
        defaultRowSortOrder,
        rowSortOrder,
        onRowSortOrderChange,
        enableNeutralRowSorting,
        ...restProps
    }: DataTablePropsType,
) => {
    const [rowSortOrderInternal, setRowSortOrderInternal] = useState<
        TableHeadCellRowSortOrderType
    >(defaultRowSortOrder || []); // controllable & uncontrollable
    const rowSortOrderActual = rowSortOrder || rowSortOrderInternal;
    const onRowSortOrderChangeInternal = useCallback(
        (order: TableHeadCellRowSortOrderType) => {
            // controllable & uncontrollable
            if (!rowSortOrder) {
                setRowSortOrderInternal(order);
            }
            if (onRowSortOrderChange) {
                onRowSortOrderChange(order);
            }
        },
        [onRowSortOrderChange, rowSortOrder, setRowSortOrderInternal],
    );

    const onHeadCellClick = useCallback(
        (event: MouseEvent<HTMLTableHeaderCellElement>) => {
            const node = event.currentTarget as HTMLElement;
            const columnId = node.getAttribute('data-columnid');
            const sortable = node.getAttribute('data-sortable');

            if (!sortable || !columnId) {
                return;
            }

            const column = columnsSafe.find(
                columnItem => columnItem.id === columnId,
            );
            if (!column) {
                return;
            }

            if (column.headCellProps && column.headCellProps.onClick) {
                column.headCellProps.onClick(event);
                if (event.isPropagationStopped()) {
                    return;
                }
            }

            // todo: support sorting by several columns

            let direction = '';
            if (
                rowSortOrderActual.length &&
                rowSortOrderActual[0][0] === columnId
            ) {
                // eslint-disable-next-line prefer-destructuring
                direction = rowSortOrderActual[0][1];
            }

            let nextOrder: TableHeadCellRowSortOrderType = [];

            if (direction === '') {
                nextOrder = [[columnId, TABLE_SORTING_DIRECTION_ASC]];
            } else if (direction === TABLE_SORTING_DIRECTION_ASC) {
                nextOrder = [[columnId, TABLE_SORTING_DIRECTION_DESC]];
            } else {
                if (enableNeutralRowSorting) {
                    nextOrder = [];
                } else {
                    nextOrder = [[columnId, TABLE_SORTING_DIRECTION_ASC]];
                }
            }

            onRowSortOrderChangeInternal(nextOrder);

            if (onRowSortOrderChange) {
                onRowSortOrderChange(nextOrder);
            }
        },
        [
            onRowSortOrderChange,
            rowSortOrderActual,
            onRowSortOrderChangeInternal,
            enableNeutralRowSorting,
            columnsSafe,
        ],
    );

    return {
        result: {
            rowSortOrder: rowSortOrderActual,
            onHeadCellClick,
        },
        restProps,
    };

    // return [{
    //     rowSortOrder: rowSortOrderActual,
    //     onRowSortOrderChange: onRowSortOrderChangeInternal,
    // }, restProps];
};
