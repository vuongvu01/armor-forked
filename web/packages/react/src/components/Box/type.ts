import { HTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import {
    SizingAttributesType,
    SpacingInnerAttributesType,
    SpacingOuterAttributesType,
} from '../../system/attributes';

type AttributesBoxType = HTMLAttributes<HTMLElement>;

export type AttributesOverridableBoxType = {};
export type AttributeOverrideBoxType = {
    root?: AttributesOverridableBoxType;
};
export type StyleOverrideBoxType = {
    root?: StylesFunctionBoxType;
};

export type StylesFunctionBoxType = StylesFunctionOrStubType<AttributesBoxType>;
export type StyleOverrideSafeBoxType = Required<StyleOverrideBoxType>;

export type PropsBoxType = AttributesOverridableBoxType &
    ComponentAttributesType<
        AttributeOverrideBoxType,
        AttributesBoxType,
        StyleOverrideBoxType
    > &
    SpacingOuterAttributesType &
    SpacingInnerAttributesType &
    SizingAttributesType;
