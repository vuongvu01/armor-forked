import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentType,
} from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import {
    MarginAttributesType,
    SizeAttributesType,
} from '../../system/attributes';
import { ThemeType } from '../../styling';
import { Indexed, ObjectLiteralType } from '../../type';

export type ButtonPropsType = ButtonOverridableAttributesType &
    ComponentAttributesType<
        ButtonAttributeOverrideType,
        ButtonAttributesType,
        ButtonStyleOverrideType
    > &
    SizeAttributesType &
    MarginAttributesType;

type ButtonAttributesType = ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'>;

export type ButtonTagType = string | ComponentType<any>;

export type ButtonOverridableAttributesType = Indexed<{
    tag?: ButtonTagType;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    danger?: boolean;
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
