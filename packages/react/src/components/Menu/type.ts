import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType, PaddingAttributesType } from '../../system';

/** 👉 PROPS TYPE */
type MenuEffectivePropsType = Partial<{
    secondary: boolean;
    tertiary: boolean;
    expanded: boolean;
    enableBottomSeparator: boolean;
    enableEffects: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    PaddingAttributesType &
    MarginAttributesType;

/* Menu component prop type */
export type MenuPropsType = MenuEffectivePropsType & ComponentStylePropsType;

/* Menu Root node prop type */
export type MenuRootPropsType = MenuEffectivePropsType &
    ComponentElementStylePropsType;
