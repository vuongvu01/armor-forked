import { HTMLAttributes } from 'react';
import { StylePropsType, PropsWithNodeStylePropsType } from '../../type';
import { MarginAttributesType } from '../../../system/attributes';
import { Indexed, ScalarType } from '../../../type';

type TableHeadCellSortType = 'numerical' | 'alphabetical';

type TableHeadCellEffectivePropsType = Indexed<{
    sortable?: boolean;
    columnId?: ScalarType;
    sortType?: TableHeadCellSortType;
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
