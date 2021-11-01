import { AnchorHTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system';
import {
    ComponentBehaviourCustomTagType,
    ComponentBehaviourCustomTagPropertyType,
} from '../../system/types/ComponentBehaviourCustomTagType';
import { ComponentBehaviourLinkType } from '../../system/types/ComponentBehaviourLinkType';

export type LinkTagType = ComponentBehaviourCustomTagPropertyType;

/** 👉 PROPS TYPE */
type LinkEffectivePropsType = Partial<{
    /** If set to *true*, the Link will be rendered as *small* */
    small: boolean;
    /** If set to *true*, the Link will be rendered as *medium* */
    medium: boolean;
    /** If set to *true*, the Link will be rendered as *large* */
    large: boolean;
    focused: boolean;
    pressed: boolean;
    /** If set to *true*, the Link will be rendered as disabled */
    disabled: boolean;
    inline: boolean;
    /** If set to *true*, the Link will be rendered as underlined */
    underline: boolean;
    /** I set to *true* Link content will not wrap and ellipsis will appear on text overflow */
    ellipsis: boolean;
}> &
    ComponentBehaviourLinkType &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> &
    ComponentBehaviourCustomTagType &
    MarginAttributesType;

export type LinkPropsType = LinkEffectivePropsType & ComponentStylePropsType;

export type LinkRootPropsType = LinkEffectivePropsType &
    ComponentElementStylePropsType;
