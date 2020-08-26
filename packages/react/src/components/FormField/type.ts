import { HTMLAttributes } from 'react';

import { MarginAttributesType, WidthAttributesType } from '../../system';
import { Indexed } from '../../type';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
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
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        FormFieldStylesPropsType
    >;

export type FormFieldStylesPropsType = {
    Root?: StylesFunctionOrStubType<FormFieldEffectivePropsType>;
    // add style properties for other nodes here
};

/* FormField Root node prop type */
export type FormFieldRootPropsType = PropsWithNodeStylePropsType<
    FormFieldEffectivePropsType
>;