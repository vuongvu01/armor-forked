import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';

type EditableTableCellEffectivePropsType = Indexed<{
    onChange?: (value: any) => void;
    // add other custom properties here
}> &
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & // includes all HTML Div attributes
    MarginAttributesType;

/* EditableTableCell component prop type */
export type EditableTableCellPropsType = EditableTableCellEffectivePropsType &
    ComponentStylePropsType;

/* EditableTableCell Root node prop type */
export type EditableTableCellRootPropsType = EditableTableCellEffectivePropsType &
    ComponentElementStylePropsType;
