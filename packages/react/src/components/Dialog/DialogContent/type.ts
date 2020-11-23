import { HTMLAttributes } from 'react';

import { Indexed } from '../../../type';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../../type';

type DialogContentEffectivePropsType = Indexed<{
    enableVerticalScroll?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* DialogContent component prop type */
export type DialogContentPropsType = DialogContentEffectivePropsType &
    ComponentStylePropsType;

/* DialogContent Root node prop type */
export type DialogContentRootPropsType = DialogContentEffectivePropsType &
    ComponentElementStylePropsType;
