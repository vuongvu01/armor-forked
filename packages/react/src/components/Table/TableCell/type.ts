import { HTMLAttributes } from 'react';
import { StylePropsType, PropsWithNodeStylePropsType } from '../../type';
import { Indexed } from '../../../type';
import {
    ColorAttributesType,
    HeightAttributesType,
    PaddingAttributesType,
    WidthAttributesType,
} from '../../../system/attributes';

export type TableCellStickyAlignment = 'left' | 'right';
export type TableCellStickyOffset = number;

type TableCellEffectivePropsType = Indexed<{
    isHeader?: boolean;
    stickyTop?: boolean;
    stickyAlignment?: TableCellStickyAlignment;
    stickyOffset?: TableCellStickyOffset;
    stickyVisible?: boolean;
    stickyShadowVisible?: boolean;
    disabled?: boolean;
    ellipsis?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableDataCellElement | HTMLTableHeaderCellElement> & // includes all HTML Td | Th attributes
    PaddingAttributesType &
    WidthAttributesType &
    HeightAttributesType &
    ColorAttributesType &
    TableCellContentAlignmentAttributesType;

/* TableCell component prop type */
export type TableCellPropsType = TableCellEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* TableCell Root node prop type */
export type TableCellRootPropsType = PropsWithNodeStylePropsType<
    TableCellEffectivePropsType
>;

export type TableCellContentAlignmentAttributesType = {
    contentAlignX?: 'left' | 'center' | 'right';
    contentAlignY?: 'top' | 'center' | 'bottom';
};
