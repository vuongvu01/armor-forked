import { HTMLAttributes } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../../type';
import { Indexed, ScalarType } from '../../../type';
import {
    ColorAttributesType,
    HeightAttributesType,
    PaddingAttributesType,
    WidthAttributesType,
} from '../../../system/attributes';

type TableCellEffectivePropsType = Indexed<{
    stickyLeft?: boolean;
    stickyLeftOffset?: ScalarType;
    stickyRight?: boolean;
    isHeader?: boolean;
    stickyTop?: boolean;
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
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        TableCellStylesPropsType
    >;

export type TableCellStylesPropsType = {
    Root?: StylesFunctionOrStubType<TableCellEffectivePropsType>;
    // add style properties for other nodes here
};

/* TableCell Root node prop type */
export type TableCellRootPropsType = PropsWithNodeStylePropsType<
    TableCellEffectivePropsType
>;

export type TableCellContentAlignmentAttributesType = {
    contentAlignX?: 'left' | 'center' | 'right';
    contentAlignY?: 'top' | 'center' | 'bottom';
};
