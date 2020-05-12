import { HTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import { ThemeType } from '../../styling';
import { Indexed, ObjectLiteralType } from '../../type';

export type DialogActionsPropsType = DialogActionsOverridableAttributesType &
    ComponentAttributesType<
        DialogActionsAttributesType,
        DialogActionsStyleOverrideType
    >;

type DialogActionsAttributesType = HTMLAttributes<HTMLDivElement>;

export type DialogActionsOverridableAttributesType = Indexed<{}>;
export type DialogActionsStyleOverrideType = {
    Root?: DialogActionsStylesFunctionType;
};

export type DialogActionsStylesFunctionType = StylesFunctionOrStubType<
    DialogActionsAttributesType
>;
export type DialogActionsStyleOverrideSafeType = Required<
    DialogActionsStyleOverrideType
>;

export type DialogActionsRootStylePropsType = DialogActionsPropsType & {
    theme: ThemeType;
    styles: DialogActionsStylesFunctionType;
};

export type DialogActionsThemeType = Indexed<{
    base: ObjectLiteralType;
}>;
