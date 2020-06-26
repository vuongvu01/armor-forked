import { HTMLAttributes } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';

type FormFieldMessageEffectivePropsType = Indexed<{
    error?: boolean;
    oneLine?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* FormFieldMessage component prop type */
export type FormFieldMessagePropsType = FormFieldMessageEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        FormFieldMessageStylesPropsType
    >;

export type FormFieldMessageStylesPropsType = {
    Root?: StylesFunctionOrStubType<FormFieldMessageEffectivePropsType>;
    // add style properties for other nodes here
};

/* FormFieldMessage Root node prop type */
export type FormFieldMessageRootPropsType = PropsWithNodeStylePropsType<
    FormFieldMessageEffectivePropsType
>;
