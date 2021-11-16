import { HTMLAttributes } from 'react';
import {
    MarginPropsType,
    PaddingPropsType,
    SizePropsType,
} from '@deliveryhero/armor-system';

import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type CardEffectivePropsType = MarginPropsType &
    PaddingPropsType &
    SizePropsType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div properties

/* Paper component prop type */
export type CardPropsType = CardEffectivePropsType & ComponentStylePropsType;

/* Paper Root node prop type */
export type CardRootPropsType = CardEffectivePropsType &
    ComponentElementStylePropsType;
