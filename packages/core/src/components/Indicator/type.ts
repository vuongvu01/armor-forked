import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type IndicatorEffectivePropsType = HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

/* Indicator component prop type */
export type IndicatorPropsType = IndicatorEffectivePropsType &
    ComponentStylePropsType;

/* Indicator Root node prop type */
export type IndicatorRootPropsType = IndicatorEffectivePropsType &
    ComponentElementStylePropsType;
