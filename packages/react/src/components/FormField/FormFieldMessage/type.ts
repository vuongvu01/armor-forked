import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system';
import { Indexed } from '../../../type';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

type FormFieldMessageEffectivePropsType = Indexed<{
    error?: boolean;
    oneLine?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* FormFieldMessage component prop type */
export type FormFieldMessagePropsType = FormFieldMessageEffectivePropsType &
    ComponentStylePropsType;

/* FormFieldMessage Root node prop type */
export type FormFieldMessageRootPropsType = FormFieldMessageEffectivePropsType &
    ComponentElementStylePropsType;
