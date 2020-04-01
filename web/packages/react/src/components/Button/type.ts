import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import {
    SpanOuterAttributesType,
    WideAttributesType,
} from '../../system/attributes';
import { ThemeType } from '../../styling';

type AttributesButtonType = ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'>;

export type TagType = 'button' | 'a' | 'div' | 'span' | 'link';

export type AttributesOverridableButtonType = {
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
export type AttributeOverrideButtonType = {
    root?: AttributesOverridableButtonType;
};
export type StyleOverrideButtonType = {
    root?: StylesFunctionButtonType;
};

export type StylesFunctionButtonType = StylesFunctionOrStubType<
    AttributesButtonType
>;
export type StyleOverrideSafeButtonType = Required<StyleOverrideButtonType>;

export type ButtonPropsType = AttributesOverridableButtonType &
    ComponentAttributesType<
        AttributeOverrideButtonType,
        AttributesButtonType,
        StyleOverrideButtonType
    > &
    WideAttributesType &
    SpanOuterAttributesType;

// todo: update this
export type RootStylePropertiesButtonType = ButtonPropsType & {
    theme: ThemeType;
    styles: StylesFunctionButtonType;
};
