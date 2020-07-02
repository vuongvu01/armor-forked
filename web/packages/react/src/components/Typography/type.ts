import { HTMLAttributes } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    NodeStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';

type TypographyEffectivePropsType = Indexed<{
    h6?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* Typography component prop type */
export type TypographyPropsType = TypographyEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        TypographyStylesPropsType
    >;

export type TypographyStylesPropsType = {
    Root?: StylesFunctionOrStubType<TypographyEffectivePropsType>;
    // add style properties for other nodes here
};

/* Typography Root node prop type */
export type TypographyRootPropsType = TypographyEffectivePropsType &
    NodeStylePropsType<TypographyEffectivePropsType>;
