import { HTMLAttributes } from 'react';

import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../../type';
import { PaddingAttributesType } from '../../../system';

type DialogContentEffectivePropsType = Partial<{
    enableVerticalScroll: boolean;
    // add other custom properties here
}> &
    PaddingAttributesType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* DialogContent component prop type */
export type DialogContentPropsType = DialogContentEffectivePropsType &
    ComponentStylePropsType;

/* DialogContent Root node prop type */
export type DialogContentRootPropsType = DialogContentEffectivePropsType &
    ComponentElementStylePropsType;
