import { HTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import { ThemeType } from '../../styling';
import { Indexed, ObjectLiteralType } from '../../type';

export type DialogContentPropsType = DialogContentOverridableAttributesType &
    ComponentAttributesType<
        DialogContentAttributesType,
        DialogContentStyleOverrideType
    >;

type DialogContentAttributesType = HTMLAttributes<HTMLDivElement>;

export type DialogContentOverridableAttributesType = Indexed<{}>;
export type DialogContentStyleOverrideType = {
    Root?: DialogContentStylesFunctionType;
};

export type DialogContentStylesFunctionType = StylesFunctionOrStubType<
    DialogContentAttributesType
>;
export type DialogContentStyleOverrideSafeType = Required<
    DialogContentStyleOverrideType
>;

export type DialogContentRootStylePropsType = DialogContentPropsType & {
    theme: ThemeType;
    styles: DialogContentStylesFunctionType;
};

export type DialogContentThemeType = Indexed<{
    base: ObjectLiteralType;
}>;
