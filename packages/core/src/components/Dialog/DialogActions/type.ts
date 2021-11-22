import { HTMLAttributes } from 'react';
import { PaddingPropsType } from '@deliveryhero/armor-system';

import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../../type';

type DialogActionsEffectivePropsType = Partial<{
    // add other custom properties here
}> &
    PaddingPropsType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div properties

/* DialogActions component prop type */
export type DialogActionsPropsType = DialogActionsEffectivePropsType &
    ComponentStylePropsType;

/* DialogActions Root node prop type */
export type DialogActionsRootPropsType = DialogActionsEffectivePropsType &
    ComponentElementStylePropsType;
