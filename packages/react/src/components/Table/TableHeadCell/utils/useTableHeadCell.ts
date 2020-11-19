import { useMemo } from 'react';
import { TableHeadCellPropsType } from '../type';
import { TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL } from '../constants';
import {
    TABLE_SORTING_DIRECTION_ASC,
    TABLE_SORTING_DIRECTION_DESC,
} from '../../constants';

export const useTableHeadCell = ({
    sortable,
    columnId,
    rowSortType,
    rowSortOrder,
    ...restProps
}: TableHeadCellPropsType) => {
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
        !isSelected && rowSortType === TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL;
    const isIconAlphabetical =
        !isSelected && rowSortType !== TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL;

    return {
        sortingEnabled,
        isSelected,
        isIconNumerical,
        isIconAlphabetical,
        isAscending,
        isDescending,
        restRootProps: {
            columnId,
            ...restProps,
        },
    };
};
