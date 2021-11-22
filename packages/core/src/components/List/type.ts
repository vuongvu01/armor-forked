import { HTMLAttributes } from 'react';
import { MarginPropsType, WidthPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type ListEffectivePropsType = Partial<{
    /** If set to *true*, the list font size will be set to 14 otherwise 16 */
    small: boolean;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    WidthPropsType &
    MarginPropsType;

export type ListPropsType = ListEffectivePropsType & ComponentStylePropsType;

export type ListRootPropsType = ListEffectivePropsType &
    ComponentElementStylePropsType;
