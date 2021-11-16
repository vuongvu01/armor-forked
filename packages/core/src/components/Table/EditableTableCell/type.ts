import { HTMLAttributes } from 'react';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { ObjectLiteralType } from '../../../type';

type EditableTableCellEffectivePropsType = {
    onChange?: (value: any) => void;
    // add other custom properties here
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & // includes all HTML Div properties
    ObjectLiteralType;

/* EditableTableCell component prop type */
export type EditableTableCellPropsType = EditableTableCellEffectivePropsType &
    ComponentStylePropsType;

/* EditableTableCell Root node prop type */
export type EditableTableCellRootPropsType = EditableTableCellEffectivePropsType &
    ComponentElementStylePropsType;
