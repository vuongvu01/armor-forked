import { HTMLAttributes, ReactNode } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import { ThemeType } from '../../styling';
import { Indexed, ObjectLiteralType } from '../../type';

export type DialogTitlePropsType = DialogTitleOverridableAttributesType &
    ComponentAttributesType<
        DialogTitleAttributesType,
        DialogTitleStyleOverrideType
    >;

type DialogTitleAttributesType = HTMLAttributes<HTMLDivElement>;

export type DialogTitleOverridableAttributesType = Indexed<{
    description?: ReactNode;
}>;
export type DialogTitleStyleOverrideType = {
    Root?: DialogTitleStylesFunctionType;
    Text?: DialogTitleStylesFunctionType;
    Description?: DialogTitleStylesFunctionType;
};

export type DialogTitleStylesFunctionType = StylesFunctionOrStubType<
    DialogTitleAttributesType
>;
export type DialogTitleStyleOverrideSafeType = Required<
    DialogTitleStyleOverrideType
>;

export type DialogTitleRootStylePropsType = DialogTitlePropsType & {
    theme: ThemeType;
    styles: DialogTitleStylesFunctionType;
};

export type DialogTitleThemeType = Indexed<{
    base: ObjectLiteralType;
}>;
