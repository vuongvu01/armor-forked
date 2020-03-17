import { ButtonHTMLAttributes } from 'react';
import {
    OuterSpacingAttributes,
    StandardAttributes,
    StyleOverrideAttributes,
    AttributeOverrideAttributes,
    StylesFunctionOrStub,
} from '../type';

type AttributesButton = ButtonHTMLAttributes<HTMLButtonElement>;

export interface AttributesOverridableButton {
    primary?: boolean;
    secondary?: boolean;
    link?: boolean;
}
export interface AttributesOverrideButton {
    root?: AttributesOverridableButton;
}
export interface StylesOverrideButton {
    root?: StylesFunctionButton;
}

export type StylesFunctionButton = StylesFunctionOrStub<AttributesButton>;

export type AttributesOverrideSafeButton = Required<AttributesOverrideButton>;
export type StylesOverrideSafeButton = Required<StylesOverrideButton>;

export type PropsButton = {} & AttributesOverridableButton &
    AttributeOverrideAttributes<AttributesOverrideButton> &
    StandardAttributes<AttributesButton> &
    StyleOverrideAttributes<StylesOverrideButton> &
    OuterSpacingAttributes;
