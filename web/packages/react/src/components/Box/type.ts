import { HTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import {
    SizeAttributesType,
    PaddingAttributesType,
    MarginAttributesType,
} from '../../system/attributes';
import { ThemeType } from '../../styling';

type BoxAttributesType = HTMLAttributes<HTMLElement>;

export type BoxOverridableAttributesType = {};
export type BoxAttributeOverrideType = {
    root?: BoxOverridableAttributesType;
};
export type BoxStyleOverrideType = {
    root?: BoxStylesFunctionType;
};

export type BoxStylesFunctionType = StylesFunctionOrStubType<BoxAttributesType>;
export type BoxStyleOverrideSafeType = Required<BoxStyleOverrideType>;

export type BoxPropsType = BoxOverridableAttributesType &
    ComponentAttributesType<
        BoxAttributeOverrideType,
        BoxAttributesType,
        BoxStyleOverrideType
    > &
    MarginAttributesType &
    PaddingAttributesType &
    SizeAttributesType;

export type BoxRootStylePropsType = BoxPropsType & {
    theme: ThemeType;
    styles: BoxStylesFunctionType;
};
