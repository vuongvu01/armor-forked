import { AnchorHTMLAttributes, ComponentType } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system';

type LinkTagType = string | ComponentType<any>;

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
    to: string;
    tag: LinkTagType;
}> &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    MarginAttributesType;

export type LinkPropsType = LinkEffectivePropsType & ComponentStylePropsType;

export type LinkRootPropsType = LinkEffectivePropsType &
    ComponentElementStylePropsType;
