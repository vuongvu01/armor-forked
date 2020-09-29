import { useCallback, useContext, useMemo, MouseEvent } from 'react';
import { TableRowSortOrderContext } from '../../utils/TableRowSortOrderContext';
import { TableHeadCellPropsType } from '../type';
import { TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL } from '../constants';
import {
    TABLE_SORTING_DIRECTION_ASC,
    TABLE_SORTING_DIRECTION_DESC,
} from '../../constants';
import { TableRowSortOrderType } from '../../type';
import { TableRowSortOrderContextValueType } from '../../utils/type';

export const useTableHeadCell = ({
    sortable,
    columnId,
    onClick,
    sortType,
}: Pick<
    TableHeadCellPropsType,
    'sortable' | 'columnId' | 'onClick' | 'sortType'
>) => {
    const { rowSortOrder, onRowSortOrderChange } = useContext<
        TableRowSortOrderContextValueType
    >(TableRowSortOrderContext);

    const sortingEnabled = !!(sortable && columnId);
    const [isSelected, isAscending, isDescending] = useMemo(() => {
        if (!sortable || !rowSortOrder || !rowSortOrder.length) {
            return [false, false, false];
        }

        // todo: support sorting by several columns
        const isColumnSelected = rowSortOrder[0][0] === columnId;

        // todo: support sorting by several columns
        return [
            isColumnSelected,
            isColumnSelected &&
                rowSortOrder[0][1] === TABLE_SORTING_DIRECTION_ASC,
            isColumnSelected &&
                rowSortOrder[0][1] === TABLE_SORTING_DIRECTION_DESC,
        ];
    }, [sortable, rowSortOrder, columnId]);

    const isIconNumerical =
        !isSelected && sortType === TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL;
    const isIconAlphabetical =
        !isSelected && sortType !== TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL;

    const onRootClick = useCallback(
        (event: MouseEvent<HTMLTableHeaderCellElement>) => {
            if (onClick) {
                onClick(event);
                if (event.isPropagationStopped()) {
                    return;
                }
            }

            if (!sortingEnabled) {
                return;
            }

            let direction = '';
            // todo: support sorting by several columns
            if (
                rowSortOrder &&
                rowSortOrder.length &&
                rowSortOrder[0][0] === columnId
            ) {
                // eslint-disable-next-line prefer-destructuring
                direction = rowSortOrder[0][1];
            }

            let nextOrder: TableRowSortOrderType = [];

            if (columnId) {
                // todo: support sorting by several columns
                if (direction === '') {
                    nextOrder = [[columnId, TABLE_SORTING_DIRECTION_ASC]];
                } else if (direction === TABLE_SORTING_DIRECTION_ASC) {
                    nextOrder = [[columnId, TABLE_SORTING_DIRECTION_DESC]];
                }

                if (onRowSortOrderChange) {
                    onRowSortOrderChange(nextOrder);
                }
            }
        },
        [columnId, sortingEnabled, onClick, onRowSortOrderChange, rowSortOrder],
    );

    return {
        sortingEnabled,
        onRootClick,
        isSelected,
        isIconNumerical,
        isIconAlphabetical,
        isAscending,
        isDescending,
    };
};
