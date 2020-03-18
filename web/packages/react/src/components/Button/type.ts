import { ButtonHTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import { SpacingOuterAttributesType } from '../../system/attributes';

type AttributesButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type AttributesOverridableButtonType = {
    primary?: boolean;
    secondary?: boolean;
    link?: boolean;
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
    SpacingOuterAttributesType;
