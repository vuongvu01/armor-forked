import { HTMLAttributes } from 'react';
import { StylePropsType, PropsWithNodeStylePropsType } from '../../type';
import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';

type TableCellLabelEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* TableCellLabel component prop type */
export type TableCellLabelPropsType = TableCellLabelEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* TableCellLabel Root node prop type */
export type TableCellLabelRootPropsType = PropsWithNodeStylePropsType<
    TableCellLabelEffectivePropsType
>;
