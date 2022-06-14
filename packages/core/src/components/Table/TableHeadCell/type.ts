import { ScalarType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { TableCellPropsType } from '../TableCell';

export type TableHeadCellSortType = 'numerical' | 'alphabetical';

export type TableHeadCellSortOrderWay = 'asc' | 'desc';
export type TableHeadCellRowSortOrderType = [
    ScalarType,
    TableHeadCellSortOrderWay,
][];

/** 👉 PROPS TYPE */
type TableHeadCellEffectivePropsType = Partial<{
    columnId: ScalarType;

    /**
     * This API is for the visual purpose only, if you want to have an out-of-the-box working sort function, please use the `DataTable` component instead.
     */
    sortable: boolean;
    /**
     * @armor-docs-expand TableHeadCellSortType
     */
    rowSortType: TableHeadCellSortType;
    /**
     * @armor-docs-expand TableHeadCellRowSortOrderType, TableHeadCellSortOrderWay
     */
    rowSortOrder: TableHeadCellRowSortOrderType;

    // add other custom properties here
}> &
    TableCellPropsType;

/* TableHeadCell component prop type */
export type TableHeadCellPropsType = TableHeadCellEffectivePropsType &
    ComponentStylePropsType;

/* TableHeadCell Root node prop type */
export type TableHeadCellRootPropsType = {
    sortingEnabled: boolean;
} & TableHeadCellEffectivePropsType &
    ComponentElementStylePropsType;
