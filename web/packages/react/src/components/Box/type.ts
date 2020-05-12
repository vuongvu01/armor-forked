import { HTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import {
    SizeAttributesType,
    PaddingAttributesType,
    MarginAttributesType,
    TextAlignmentAttributesType,
} from '../../system/attributes';
import { ThemeType } from '../../styling';

type BoxAttributesType = HTMLAttributes<HTMLElement>;

export type BoxOverridableAttributesType = {};
export type BoxStyleOverrideType = {
    Root?: BoxStylesFunctionType;
};

export type BoxStylesFunctionType = StylesFunctionOrStubType<BoxAttributesType>;
export type BoxStyleOverrideSafeType = Required<BoxStyleOverrideType>;

export type BoxPropsType = BoxOverridableAttributesType &
    ComponentAttributesType<BoxAttributesType, BoxStyleOverrideType> &
    MarginAttributesType &
    PaddingAttributesType &
    SizeAttributesType &
    TextAlignmentAttributesType;

export type BoxRootStylePropsType = BoxPropsType & {
    theme: ThemeType;
    styles: BoxStylesFunctionType;
};
