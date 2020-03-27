import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentType,
} from 'react';
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
    iconRight?: ComponentType;
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

export type PropsButtonType = AttributesOverridableButtonType &
    ComponentAttributesType<
        AttributeOverrideButtonType,
        AttributesButtonType,
        StyleOverrideButtonType
    > &
    WideAttributesType &
    SpanOuterAttributesType;

export type RootStylePropertiesButtonType = PropsButtonType & {
    theme: ThemeType;
    styles: StylesFunctionButtonType;
};

export type CentralStylePropertiesButtonType = {
    hasRightIcon: boolean;
} & Pick<RootStylePropertiesButtonType, 'small' | 'theme'>;

export type RightIconStylePropertiesButtonType = Pick<
    RootStylePropertiesButtonType,
    'theme'
>;
