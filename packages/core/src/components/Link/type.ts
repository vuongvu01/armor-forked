import { AnchorHTMLAttributes } from 'react';
import {
    MarginPropsType,
    ComponentBehaviourCustomTagType,
    ComponentBehaviourCustomTagPropertyType,
    ComponentBehaviourLinkType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

export type LinkTagType = ComponentBehaviourCustomTagPropertyType;

/** 👉 PROPS TYPE */
type LinkEffectivePropsType = Partial<{
    /** If set to *true*, the Link will be rendered as *small* */
    small: boolean;
    /** If set to *true*, the Link will be rendered as *medium* */
    medium: boolean;
    /** If set to *true*, the Link will be rendered as *large* */
    large: boolean;
    /**
     * @deprecated Using this prop has no effect.
     * */
    focused: boolean;
    /**
     * @deprecated Using this prop has no effect.
     * */
    pressed: boolean;
    /** If set to *true*, the Link will be rendered as disabled */
    disabled: boolean;
    /** If set to *true*, the Link will be rendered as underlined */
    inline: boolean;
    /**
     * @deprecated Use `inline` instead
     * */
    underline: boolean;
    /** I set to *true* Link content will not wrap and ellipsis will appear on text overflow */
    ellipsis: boolean;
}> &
    ComponentBehaviourLinkType &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> &
    ComponentBehaviourCustomTagType &
    MarginPropsType;

export type LinkPropsType = LinkEffectivePropsType & ComponentStylePropsType;

export type LinkRootPropsType = LinkEffectivePropsType &
    ComponentElementStylePropsType;
