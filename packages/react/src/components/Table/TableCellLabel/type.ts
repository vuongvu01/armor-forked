import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType } from '../../../system';

/** 👉 PROPS TYPE */
type TableCellLabelEffectivePropsType = HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* TableCellLabel component prop type */
export type TableCellLabelPropsType = TableCellLabelEffectivePropsType &
    ComponentStylePropsType;

/* TableCellLabel Root node prop type */
export type TableCellLabelRootPropsType = TableCellLabelEffectivePropsType &
    ComponentElementStylePropsType;
