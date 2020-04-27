import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentType,
} from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import {
    MarginAttributesType,
    WideAttributesType,
} from '../../system/attributes';
import { ThemeType } from '../../styling';
import { Indexed, ObjectLiteralType } from '../../type';

export type ButtonPropsType = ButtonOverridableAttributesType &
    ComponentAttributesType<
        ButtonAttributeOverrideType,
        ButtonAttributesType,
        ButtonStyleOverrideType
    > &
    WideAttributesType &
    MarginAttributesType;

type ButtonAttributesType = ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'>;

export type TagType = string | ComponentType<any>;

export type ButtonOverridableAttributesType = Indexed<{
    tag?: TagType;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    small?: boolean;
    wide?: boolean;
}>;
export type ButtonAttributeOverrideType = {
    Root?: ButtonOverridableAttributesType;
};
export type ButtonStyleOverrideType = {
    Root?: ButtonStylesFunctionType;
};

export type ButtonStylesFunctionType = StylesFunctionOrStubType<
    ButtonAttributesType
>;
export type ButtonStyleOverrideSafeType = Required<ButtonStyleOverrideType>;

export type ButtonRootStylePropsType = ButtonPropsType & {
    theme: ThemeType;
    styles: ButtonStylesFunctionType;
};

export type ButtonThemeType = Indexed<{
    base: ObjectLiteralType;
    primary: ObjectLiteralType;
    secondary: ObjectLiteralType;
    tertiary: ObjectLiteralType;
    small: ObjectLiteralType;
}>;
