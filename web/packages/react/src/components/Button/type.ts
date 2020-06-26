import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentType,
} from 'react';
import {
    NodeStylePropsType,
    StylePropsType,
    StylesFunctionOrStubType,
} from '../type';
import {
    MarginAttributesType,
    WidthAttributesType,
} from '../../system/attributes';
import { Indexed } from '../../type';

export type ButtonTagType = string | ComponentType<any>;

type ButtonEffectivePropsType = Indexed<{
    tag?: ButtonTagType;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    danger?: boolean;
    small?: boolean;
    wide?: boolean;
    // add other custom properties here
}> &
    ButtonHTMLAttributes<HTMLButtonElement> & // includes all HTML Button attributes
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> & // and 3 attributes from HTML Anchor
    WidthAttributesType &
    MarginAttributesType;

/* Button component prop type */
export type ButtonPropsType = ButtonEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        ButtonStylesPropsType
    >;

export type ButtonStylesPropsType = {
    Root?: StylesFunctionOrStubType<ButtonEffectivePropsType>;
    // add style properties for other nodes here
};

/* Button Root node prop type */
export type ButtonRootPropsType = ButtonEffectivePropsType &
    NodeStylePropsType<ButtonEffectivePropsType>;
