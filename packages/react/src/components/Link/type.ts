import { AnchorHTMLAttributes, ComponentType } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system';

type LinkTagType = string | ComponentType<any>;

type LinkEffectivePropsType = Partial<{
    small: boolean;
    medium: boolean;
    large: boolean;
    focused: boolean;
    pressed: boolean;
    disabled: boolean;
    inline: boolean;
    underline: boolean;
    to: string;
    tag: LinkTagType;
}> &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    MarginAttributesType;

export type LinkPropsType = LinkEffectivePropsType & ComponentStylePropsType;

export type LinkRootPropsType = LinkEffectivePropsType &
    ComponentElementStylePropsType;
