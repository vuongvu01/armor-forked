import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import {
    MarginAttributesType,
    WideAttributesType,
} from '../../system/attributes';
import { ThemeType } from '../../styling';
import { ObjectLiteralType, ScalarType } from '../../type';

type ButtonAttributesType = ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'>;

export type TagType = 'button' | 'a' | 'div' | 'span' | 'link';

export type ButtonOverridableAttributesType = {
    tag?: TagType;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
    href?: string;
    small?: boolean;
};
export type ButtonAttributeOverrideType = {
    root?: ButtonOverridableAttributesType;
};
export type ButtonStyleOverrideType = {
    root?: ButtonStylesFunctionType;
};

export type ButtonStylesFunctionType = StylesFunctionOrStubType<
    ButtonAttributesType
>;
export type ButtonStyleOverrideSafeType = Required<ButtonStyleOverrideType>;

export type ButtonPropsType = ButtonOverridableAttributesType &
    ComponentAttributesType<
        ButtonAttributeOverrideType,
        ButtonAttributesType,
        ButtonStyleOverrideType
    > &
    WideAttributesType &
    MarginAttributesType;

export type ButtonRootStylePropsType = ButtonPropsType & {
    theme: ThemeType;
    styles: ButtonStylesFunctionType;
};

export type ButtonCSSParametersThemeType = {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textTransform?: string;
} & ObjectLiteralType;

export type ButtonAppearanceThemeType = {
    base: ButtonCSSParametersThemeType;
    hover: ButtonCSSParametersThemeType;
    focus: ButtonCSSParametersThemeType;
    disabled: ButtonCSSParametersThemeType;
} & ObjectLiteralType;

export type ButtonThemeType = {
    base: {
        fontSize: ScalarType;
        fontWeight: ScalarType;
    };
    primary: ButtonAppearanceThemeType;
    secondary: ButtonAppearanceThemeType;
    tertiary: ButtonAppearanceThemeType;
} & ObjectLiteralType;
