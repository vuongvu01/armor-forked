import { HTMLAttributes } from 'react';

import { Indexed } from '../../../type';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../../type';

type DialogActionsEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* DialogActions component prop type */
export type DialogActionsPropsType = DialogActionsEffectivePropsType &
    ComponentStylePropsType;

/* DialogActions Root node prop type */
export type DialogActionsRootPropsType = DialogActionsEffectivePropsType &
    ComponentElementStylePropsType;
