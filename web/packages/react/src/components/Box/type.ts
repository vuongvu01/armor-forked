import { HTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import {
    SizeAttributesType,
    SpanInnerAttributesType,
    SpanOuterAttributesType,
} from '../../system/attributes';
import { ThemeType } from '../../styling';

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
    SpanOuterAttributesType &
    SpanInnerAttributesType &
    SizeAttributesType;

export type RootStylePropertiesBoxType = PropsBoxType & {
    theme: ThemeType;
    styles: StylesFunctionBoxType;
};
