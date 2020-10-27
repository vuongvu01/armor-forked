import { useCallback, useState } from 'react';
import { TableHeadCellRowSortOrderType } from '../../Table/TableHeadCell/type';
import { DataTablePropsType } from '../type';

export const useDataTableRowSorting = ({
    defaultRowSortOrder,
    rowSortOrder,
    onRowSortOrderChange,
    ...restProps
}: DataTablePropsType) => {
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
        [onRowSortOrderChange, rowSortOrder],
    );

    return {
        result: {
            rowSortOrder: rowSortOrderActual,
            onRowSortOrderChange: onRowSortOrderChangeInternal,
        },
        restProps,
    };

    // return [{
    //     rowSortOrder: rowSortOrderActual,
    //     onRowSortOrderChange: onRowSortOrderChangeInternal,
    // }, restProps];
};
