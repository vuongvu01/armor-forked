import { HTMLAttributes } from 'react';

import {
    SizeAttributesType,
    PaddingAttributesType,
    MarginAttributesType,
    TextAlignmentAttributesType,
    DisplayAttributesType,
    ColorAttributesType,
} from '../../system';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type BoxEffectivePropsType = Partial<{
    // add other custom properties here
}> &
    MarginAttributesType &
    PaddingAttributesType &
    SizeAttributesType &
    TextAlignmentAttributesType &
    DisplayAttributesType &
    ColorAttributesType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* Box component prop type */
export type BoxPropsType = BoxEffectivePropsType & ComponentStylePropsType;

/* Box Root node prop type */
export type BoxRootPropsType = BoxEffectivePropsType &
    ComponentElementStylePropsType;
