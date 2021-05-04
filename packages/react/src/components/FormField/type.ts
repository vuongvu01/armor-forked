import { HTMLAttributes } from 'react';

import { MarginAttributesType, WidthAttributesType } from '../../system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

type FormFieldEffectivePropsType = Partial<{
    enableVerticalOuterSpacing: boolean;
    /** @deprecated @see enableVerticalOuterSpacing */
    autoMargin: boolean;
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

// to search for an extra mind, let's not timebox, shooting in the dark, this caused us some back and forward
