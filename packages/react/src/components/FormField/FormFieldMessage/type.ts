import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

type FormFieldMessageEffectivePropsType = Partial<{
    /** Being set to true, enables displaying the message in red */
    error: boolean;
    /** Being set to true, disabled content word wrap */
    oneLine: boolean;
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
