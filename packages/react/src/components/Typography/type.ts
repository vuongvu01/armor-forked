import { HTMLAttributes } from 'react';
import {
    ColorAttributesType,
    MarginAttributesType,
    TextAlignmentAttributesType,
} from '../../system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { ComponentBehaviourCustomTagType } from '../../system/types/ComponentBehaviourCustomTagType';
import { ComponentBehaviourLinkType } from '../../system/types/ComponentBehaviourLinkType';

/** 👉 PROPS TYPE */
type TypographyEffectivePropsType = Partial<{
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
    ComponentBehaviourLinkType &
    ComponentBehaviourCustomTagType &
    ColorAttributesType &
    MarginAttributesType &
    TextAlignmentAttributesType;

/* Typography component prop type */
export type TypographyPropsType = TypographyEffectivePropsType &
    ComponentStylePropsType;

/* Typography Root node prop type */
export type TypographyRootPropsType = TypographyEffectivePropsType &
    ComponentElementStylePropsType;
