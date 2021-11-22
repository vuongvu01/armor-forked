import { ButtonHTMLAttributes } from 'react';
import {
    MarginPropsType,
    PaddingPropsType,
    WidthPropsType,
    ComponentBehaviourCustomTagType,
    ComponentBehaviourLinkType,
} from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../type';

/**
 * 👉 PROPS TYPE
 */
type ButtonEffectivePropsType = Partial<{
    /** If set to *true*, the Button will be rendered as *primary*. This is the default. */
    primary: boolean;
    /** If set to *true*, the Button will be rendered as *secondary*. This attribute has priority over the *primary* and *tertiary* properties. */
    secondary: boolean;
    /** If set to *true*, the Button will be rendered as tertiary. This attribute has priority over the *primary* attribute. */
    tertiary: boolean;
    /** If set to *true*, the Button will be rendered as *danger*. */
    danger: boolean;
    /** If set to *true*, the Button will be rendered as *small*, which means that the *spacing* will be reduced accordingly. */
    small: boolean;
    /** If set to *true*, the Button will be rendered as *disabled*, but without having actual HTML attribute defined. It may be helpful when you need to render a disabled button while still having *DOM* events working. */
    likeDisabled: boolean;
    // add other custom properties here
}> &
    ButtonHTMLAttributes<HTMLButtonElement> & // includes all HTML Button properties
    ComponentBehaviourCustomTagType &
    ComponentBehaviourLinkType &
    WidthPropsType &
    PaddingPropsType &
    MarginPropsType;

/* Button component prop type */
export type ButtonPropsType = ButtonEffectivePropsType;

/* Button Root node prop type */
export type ButtonRootPropsType = ButtonEffectivePropsType &
    ComponentElementStylePropsType;
