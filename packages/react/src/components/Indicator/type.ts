import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { Indexed } from '../../type';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../type';

type IndicatorEffectivePropsType = Indexed<{
    exampleProperty?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* Indicator component prop type */
export type IndicatorPropsType = IndicatorEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        IndicatorStylesPropsType
    >;

export type IndicatorStylesPropsType = {
    Root?: StylesFunctionOrStubType<IndicatorEffectivePropsType>;
    // add style properties for other nodes here
};

/* Indicator Root node prop type */
export type IndicatorRootPropsType = PropsWithNodeStylePropsType<
    IndicatorEffectivePropsType
>;
