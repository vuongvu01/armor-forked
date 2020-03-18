import { HTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import { SpacingOuterAttributesType } from '../../system/attributes';
import {
    AttributesOverridableButtonType,
    StyleOverrideButtonType,
} from '../Button/type';

type AttributesDialogType = HTMLAttributes<HTMLElement>;

export type AttributesOverridableDialogType = {};
export type AttributeOverrideDialogType = {
    buttonYes?: AttributesOverridableButtonType;
    buttonNo?: AttributesOverridableButtonType;
};
export type StyleOverrideDialogType = {
    root?: StylesFunctionDialogType;
    buttonPanel?: StylesFunctionOrStubType;
    closeButton?: StylesFunctionOrStubType;
    buttonYes?: StyleOverrideButtonType;
    buttonNo?: StyleOverrideButtonType;
};

export type StylesFunctionDialogType = StylesFunctionOrStubType<
    AttributesDialogType
>;
export type StyleOverrideSafeDialogType = Required<StyleOverrideDialogType>;

export type PropsDialogType = AttributesOverridableDialogType &
    ComponentAttributesType<
        AttributeOverrideDialogType,
        AttributesDialogType,
        StyleOverrideDialogType
    > &
    SpacingOuterAttributesType;
