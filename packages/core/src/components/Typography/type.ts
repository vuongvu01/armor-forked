import { HTMLAttributes } from 'react';
import {
    ColorPropsType,
    MarginPropsType,
    TextAlignmentPropsType,
    ComponentBehaviourLinkType,
    ComponentBehaviourCustomTagType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

type WordBreakType = 'break-all' | 'break-word' | 'inherit' | 'initial' | 'keep-all' | 'normal' | 'revert' | 'unset'

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
    wordBreak?: WordBreakType;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    ComponentBehaviourLinkType &
    ComponentBehaviourCustomTagType &
    ColorPropsType &
    MarginPropsType &
    TextAlignmentPropsType;

/* Typography component prop type */
export type TypographyPropsType = TypographyEffectivePropsType &
    ComponentStylePropsType;

/* Typography Root node prop type */
export type TypographyRootPropsType = TypographyEffectivePropsType &
    ComponentElementStylePropsType;
