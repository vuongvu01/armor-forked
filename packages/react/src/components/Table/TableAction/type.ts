import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import {
    MarginAttributesType,
    PaddingAttributesType,
} from '../../../system/attributes';
import { Indexed } from '../../../type';

type TableActionEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    PaddingAttributesType &
    MarginAttributesType;

/* TableAction component prop type */
export type TableActionPropsType = TableActionEffectivePropsType &
    ComponentStylePropsType;

/* TableAction Root node prop type */
export type TableActionRootPropsType = TableActionEffectivePropsType &
    ComponentElementStylePropsType;
