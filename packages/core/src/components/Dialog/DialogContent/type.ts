import { HTMLAttributes } from 'react';
import { PaddingPropsType } from '@deliveryhero/armor-system';

import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../../type';

type DialogContentEffectivePropsType = Partial<{
    enableVerticalScroll: boolean;
    // add other custom properties here
}> &
    PaddingPropsType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div properties

/* DialogContent component prop type */
export type DialogContentPropsType = DialogContentEffectivePropsType &
    ComponentStylePropsType;

/* DialogContent Root node prop type */
export type DialogContentRootPropsType = DialogContentEffectivePropsType &
    ComponentElementStylePropsType;
