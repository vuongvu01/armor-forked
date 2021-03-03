import { useMemo } from 'react';
import { TableHeadCellPropsType } from '../type';
import {
    TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL,
    tableHeadCellRootTestId,
} from '../constants';
import {
    TABLE_SORTING_DIRECTION_ASC,
    TABLE_SORTING_DIRECTION_DESC,
} from '../../constants';
import { ReferenceType } from '../../../../type';

export const useTableHeadCell = (
    {
        sortable,
        columnId,
        rowSortType,
        rowSortOrder,
        ...restProps
    }: TableHeadCellPropsType,
    ref: ReferenceType,
) => {
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
        rootProps: {
            'data-testid': tableHeadCellRootTestId,
            enableContentWrap: false,
            ...restProps,
            columnId,
            ref,
            sortingEnabled,
            'data-sortable': sortingEnabled ? '1' : '0',
        },

        isSelected,
        isIconNumerical,
        isIconAlphabetical,
        isAscending,
        isDescending,
    };
};
