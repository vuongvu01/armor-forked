import { TdHTMLAttributes } from 'react';
import {
    ColorPropsType,
    HeightPropsType,
    PaddingPropsType,
    WidthPropsType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

export type TableCellStickyAlignment = 'left' | 'right';
export type TableCellStickyOffset = number;

/** 👉 PROPS TYPE */
export type TableCellEffectivePropsType = Partial<{
    isHeader?: boolean;
    stickyTop?: boolean;
    /**
     * @armor-docs-expand TableCellStickyAlignment
     */
    stickyAlignment?: TableCellStickyAlignment;
    /**
     * @armor-docs-expand TableCellStickyOffset
     */
    stickyOffset?: TableCellStickyOffset;
    stickyVisible?: boolean;
    stickyShadowVisible?: boolean;
    disabled?: boolean;
    ellipsis?: boolean;
    enableContentWordBreak?: boolean;
    enableContentWrap?: boolean;
    // add other custom properties here
}> &
    TdHTMLAttributes<HTMLTableDataCellElement | HTMLTableHeaderCellElement> & // includes all HTML Td | Th properties
    PaddingPropsType &
    WidthPropsType &
    HeightPropsType &
    ColorPropsType &
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
