import { TdHTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import {
    ColorAttributesType,
    HeightAttributesType,
    PaddingAttributesType,
    WidthAttributesType,
} from '../../../system';

export type TableCellStickyAlignment = 'left' | 'right';
export type TableCellStickyOffset = number;

export type TableCellEffectivePropsType = Partial<{
    isHeader?: boolean;
    stickyTop?: boolean;
    stickyAlignment?: TableCellStickyAlignment;
    stickyOffset?: TableCellStickyOffset;
    stickyVisible?: boolean;
    stickyShadowVisible?: boolean;
    disabled?: boolean;
    ellipsis?: boolean;
    enableContentWordBreak?: boolean;
    enableContentWrap?: boolean;
    // add other custom properties here
}> &
    TdHTMLAttributes<HTMLTableDataCellElement | HTMLTableHeaderCellElement> & // includes all HTML Td | Th attributes
    PaddingAttributesType &
    WidthAttributesType &
    HeightAttributesType &
    ColorAttributesType &
    TableCellContentAlignmentAttributesType;

/* TableCell component prop type */
export type TableCellPropsType = TableCellEffectivePropsType &
    ComponentStylePropsType;

/* TableCell Root node prop type */
export type TableCellRootPropsType = TableCellEffectivePropsType &
    ComponentElementStylePropsType;

export type TableCellContentAlignmentAttributesType = {
    contentAlignX?: 'left' | 'center' | 'right';
    contentAlignY?: 'top' | 'center' | 'bottom';
};
