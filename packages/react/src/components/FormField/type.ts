import { HTMLAttributes } from 'react';

import { MarginAttributesType, WidthAttributesType } from '../../system';
import { Indexed } from '../../type';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

type FormFieldEffectivePropsType = Indexed<{
    autoMargin?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    WidthAttributesType &
    MarginAttributesType;

/* FormField component prop type */
export type FormFieldPropsType = FormFieldEffectivePropsType &
    ComponentStylePropsType;

/* FormField Root node prop type */
export type FormFieldRootPropsType = FormFieldEffectivePropsType &
    ComponentElementStylePropsType;
