import { HTMLAttributes } from 'react';
import { StylePropsType, PropsWithNodeStylePropsType } from '../../type';
import { MarginAttributesType } from '../../../system/attributes';
import { Indexed, ScalarType } from '../../../type';

export type TableHeadCellSortType = 'numerical' | 'alphabetical';

export type TableHeadCellSortOrderWay = 'asc' | 'desc';
export type TableHeadCellRowSortOrderType = [
    ScalarType,
    TableHeadCellSortOrderWay,
][];

type TableHeadCellEffectivePropsType = Indexed<{
    columnId?: ScalarType;

    // sorting
    sortable?: boolean;
    rowSortType?: TableHeadCellSortType;
    rowSortOrder?: TableHeadCellRowSortOrderType;

    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableHeaderCellElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* TableHeadCell component prop type */
export type TableHeadCellPropsType = TableHeadCellEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* TableHeadCell Root node prop type */
export type TableHeadCellRootPropsType = PropsWithNodeStylePropsType<
    TableHeadCellEffectivePropsType
>;
