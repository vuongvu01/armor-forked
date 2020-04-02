import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import {
    MarginAttributesType,
    WideAttributesType,
} from '../../system/attributes';
import { ThemeType } from '../../styling';

type ButtonAttributesType = ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'>;

export type TagType = 'button' | 'a' | 'div' | 'span' | 'link';

export type ButtonOverridableAttributesType = {
    tag?: TagType;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    ghost?: boolean;
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
    href?: string;
    small?: boolean;
};
export type ButtonAttributeOverrideType = {
    root?: ButtonOverridableAttributesType;
};
export type ButtonStyleOverrideType = {
    root?: ButtonStylesFunctionType;
};

export type ButtonStylesFunctionType = StylesFunctionOrStubType<
    ButtonAttributesType
>;
export type ButtonStyleOverrideSafeType = Required<ButtonStyleOverrideType>;

export type ButtonPropsType = ButtonOverridableAttributesType &
    ComponentAttributesType<
        ButtonAttributeOverrideType,
        ButtonAttributesType,
        ButtonStyleOverrideType
    > &
    WideAttributesType &
    MarginAttributesType;

// todo: update this
export type ButtonRootStylePropsType = ButtonPropsType & {
    theme: ThemeType;
    styles: ButtonStylesFunctionType;
};
