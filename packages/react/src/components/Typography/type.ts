import { ComponentType, HTMLAttributes } from 'react';
import {
    ColorAttributesType,
    MarginAttributesType,
    TextAlignmentAttributesType,
} from '../../system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

export type TypographyTagType = string | ComponentType<any>;

type TypographyEffectivePropsType = Partial<{
    tag: TypographyTagType;
    pageTitle: boolean;
    sectionTitle: boolean;
    subSectionTitle: boolean;
    label: boolean;
    paragraph: boolean;
    large: boolean;
    medium: boolean;
    small: boolean;
    maxLines: number;
    disabled: boolean;
    error: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    ColorAttributesType &
    MarginAttributesType &
    TextAlignmentAttributesType;

/* Typography component prop type */
export type TypographyPropsType = TypographyEffectivePropsType &
    ComponentStylePropsType;

/* Typography Root node prop type */
export type TypographyRootPropsType = TypographyEffectivePropsType &
    ComponentElementStylePropsType;
