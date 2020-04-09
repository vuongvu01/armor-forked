import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentType,
    ReactNode,
} from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import {
    MarginAttributesType,
    WideAttributesType,
} from '../../system/attributes';
import { ThemeType } from '../../styling';
import { Indexed, ScalarType } from '../../type';

type ButtonAttributesType = ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'>;

export type TagType = string | ComponentType<any>;

export type ButtonOverridableAttributesType = Indexed<{
    tag?: TagType;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
    href?: string;
    small?: boolean;
}>;
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

export type ButtonCSSParametersThemeType = Indexed<{
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textTransform?: string;
}>;

export type ButtonAppearanceThemeType = Indexed<{
    base: ButtonCSSParametersThemeType;
    hover: ButtonCSSParametersThemeType;
    focus: ButtonCSSParametersThemeType;
    disabled: ButtonCSSParametersThemeType;
}>;

export type ButtonThemeType = Indexed<{
    base: {
        fontSize: ScalarType;
        fontWeight: ScalarType;
    };
    primary: ButtonAppearanceThemeType;
    secondary: ButtonAppearanceThemeType;
    tertiary: ButtonAppearanceThemeType;
}>;
