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
import { ComponentElementStylePropsType } from '../type';
import { ScalarType } from '../../type';

export type ButtonTagType = string | ComponentType<any>;

/**
 * 👉 PROPS TYPE
 */
type ButtonEffectivePropsType = Partial<{
    /**
     * Sets HTML tag or React component to be used for **.Button-Root.**
     * @armor-docs-expand ButtonTagType
     */
    tag: ButtonTagType;
    /** If set to *true*, the Button will be rendered as *primary*. This is the default. */
    primary: boolean;
    /** If set to *true*, the Button will be rendered as *secondary*. This attribute has priority over the *primary* and *tertiary* attributes. */
    secondary: boolean;
    /** If set to *true*, the Button will be rendered as tertiary. This attribute has priority over the *primary* attribute. */
    tertiary: boolean;
    /** If set to *true*, the Button will be rendered as *danger*. */
    danger: boolean;
    /** If set to *true*, the Button will be rendered as *small*, which means that the *spacing* will be reduced accordingly. */
    small: boolean;
    /** If defined, the component will forward it to the underlying router link element. In some routers the *to* property is an equivalent for *href* in case of a normal *a* link. */
    to: string;
    /** If set to *true*, the Button will be rendered as *disabled*, but without having actual HTML attribute defined. It may be helpful when you need to render a disabled button while still having *DOM* events working. */
    likeDisabled: boolean;
    /** If the underlying element is an *anchor* element, the component will forward this down */
    href: string;
    /** If the underlying element is an *anchor* element, the component will forward this down */
    rel: string;
    /** If the underlying element is an *anchor* element, the component will forward this down */
    target: string;
    // add other custom properties here
}> &
    ButtonHTMLAttributes<HTMLButtonElement> & // includes all HTML Button attributes
    WidthAttributesType &
    PaddingAttributesType &
    MarginAttributesType;

/* Button component prop type */
export type ButtonPropsType = ButtonEffectivePropsType;

/* Button Root node prop type */
export type ButtonRootPropsType = ButtonEffectivePropsType &
    ComponentElementStylePropsType;
