import { HTMLAttributes } from 'react';
import {
    OuterSpacingAttributes,
    StandardAttributes,
    StyleOverrideAttributes,
    AttributeOverrideAttributes,
    StylesFunctionOrStub,
} from '../type';
import {
    AttributesOverridableButton,
    StylesOverrideButton,
} from '../Button/type';

type AttributesDialog = HTMLAttributes<HTMLElement>;

export interface AttributesOverridableDialog {}
export interface AttributesOverrideDialog {
    buttonYes?: AttributesOverridableButton;
    buttonNo?: AttributesOverridableButton;
}
export interface StylesOverrideDialog {
    root?: StylesFunctionDialog;
    buttonPanel?: StylesFunctionOrStub;
    closeButton?: StylesFunctionOrStub;
    buttonYes?: StylesOverrideButton;
    buttonNo?: StylesOverrideButton;
}

export type StylesFunctionDialog = StylesFunctionOrStub<AttributesDialog>;

export type AttributesOverrideSafeDialog = Required<AttributesOverrideDialog>;
export type StylesOverrideSafeDialog = Required<StylesOverrideDialog>;

export type PropsDialog = {} & AttributesOverridableDialog &
    AttributeOverrideAttributes<AttributesOverrideDialog> &
    StandardAttributes<AttributesDialog> &
    StyleOverrideAttributes<StylesOverrideDialog> &
    OuterSpacingAttributes;
