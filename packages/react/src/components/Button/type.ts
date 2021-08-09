import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentType,
} from 'react';

import {
    MarginAttributesType,
    PaddingAttributesType,
    WidthAttributesType,
} from '../../system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

export type ButtonTagType = string | ComponentType<any>;

/** 👉 PROPS TYPE */
type ButtonEffectivePropsType = Partial<{
    tag: ButtonTagType;
    primary: boolean;
    secondary: boolean;
    tertiary: boolean;
    danger: boolean;
    small: boolean;
    wide: boolean;
    to: string;
    likeDisabled: boolean;
    // add other custom properties here
}> &
    ButtonHTMLAttributes<HTMLButtonElement> & // includes all HTML Button attributes
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> & // and 3 attributes from HTML Anchor
    WidthAttributesType &
    PaddingAttributesType &
    MarginAttributesType;

/* Button component prop type */
export type ButtonPropsType = ButtonEffectivePropsType &
    ComponentStylePropsType;

/* Button Root node prop type */
export type ButtonRootPropsType = ButtonEffectivePropsType &
    ComponentElementStylePropsType;
