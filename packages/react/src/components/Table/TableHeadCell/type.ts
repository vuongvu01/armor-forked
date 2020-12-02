import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { PaddingAttributesType } from '../../../system/attributes';
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
    PaddingAttributesType;

/* TableHeadCell component prop type */
export type TableHeadCellPropsType = TableHeadCellEffectivePropsType &
    ComponentStylePropsType;

/* TableHeadCell Root node prop type */
export type TableHeadCellRootPropsType = TableHeadCellEffectivePropsType &
    ComponentElementStylePropsType;
