import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

type IndicatorEffectivePropsType = Partial<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* Indicator component prop type */
export type IndicatorPropsType = IndicatorEffectivePropsType &
    ComponentStylePropsType;

/* Indicator Root node prop type */
export type IndicatorRootPropsType = IndicatorEffectivePropsType &
    ComponentElementStylePropsType;
