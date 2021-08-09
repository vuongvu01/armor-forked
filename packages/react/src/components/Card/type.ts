import { HTMLAttributes } from 'react';

import {
    MarginAttributesType,
    PaddingAttributesType,
    SizeAttributesType,
} from '../../system';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type CardEffectivePropsType = Partial<{
    // add other custom properties here
}> &
    MarginAttributesType &
    PaddingAttributesType &
    SizeAttributesType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* Paper component prop type */
export type CardPropsType = CardEffectivePropsType & ComponentStylePropsType;

/* Paper Root node prop type */
export type CardRootPropsType = CardEffectivePropsType &
    ComponentElementStylePropsType;
