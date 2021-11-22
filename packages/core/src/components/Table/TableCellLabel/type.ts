import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

/** 👉 PROPS TYPE */
type TableCellLabelEffectivePropsType = HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

/* TableCellLabel component prop type */
export type TableCellLabelPropsType = TableCellLabelEffectivePropsType &
    ComponentStylePropsType;

/* TableCellLabel Root node prop type */
export type TableCellLabelRootPropsType = TableCellLabelEffectivePropsType &
    ComponentElementStylePropsType;
