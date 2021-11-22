import { HTMLAttributes } from 'react';

import {
    SizePropsType,
    PaddingPropsType,
    MarginPropsType,
    TextAlignmentPropsType,
    DisplayPropsType,
    ColorPropsType,
} from '@deliveryhero/armor-system';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type BoxEffectivePropsType = Partial<{
    // add other custom properties here
}> &
    MarginPropsType &
    PaddingPropsType &
    SizePropsType &
    TextAlignmentPropsType &
    DisplayPropsType &
    ColorPropsType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div properties

/* Box component prop type */
export type BoxPropsType = BoxEffectivePropsType & ComponentStylePropsType;

/* Box Root node prop type */
export type BoxRootPropsType = BoxEffectivePropsType &
    ComponentElementStylePropsType;
