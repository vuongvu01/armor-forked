import { HTMLAttributes } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
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
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        EditableTableCellStylesPropsType
    >;

export type EditableTableCellStylesPropsType = {
    Root?: StylesFunctionOrStubType<EditableTableCellEffectivePropsType>;
    // add style properties for other nodes here
};

/* EditableTableCell Root node prop type */
export type EditableTableCellRootPropsType = PropsWithNodeStylePropsType<
    EditableTableCellEffectivePropsType
>;
