import { ComponentType, HTMLAttributes } from 'react';
import { MarginAttributesType } from 'src/system/attributes';
import { Indexed } from 'src/type';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    NodeStylePropsType,
} from '../type';

export type TypographyTagType = string | ComponentType<any>;

type TypographyEffectivePropsType = Indexed<{
    tag?: TypographyTagType;
    pageTitle?: boolean;
    sectionTitle?: boolean;
    subSectionTitle?: boolean;
    label?: boolean;
    paragraph?: boolean;
    large?: boolean;
    medium?: boolean;
    small?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* Typography component prop type */
export type TypographyPropsType = TypographyEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* Typography Root node prop type */
export type TypographyRootPropsType = TypographyEffectivePropsType &
    NodeStylePropsType<TypographyEffectivePropsType>;
