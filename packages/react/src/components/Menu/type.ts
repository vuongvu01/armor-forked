import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType, PaddingAttributesType } from '../../system';

/** 👉 PROPS TYPE */
type MenuEffectivePropsType = Partial<{
    /** If set to *true*, the Menu will be rendered as *secondary* */
    secondary: boolean;
    /** If set to *true*, the Menu will be rendered as *tertiary* */
    tertiary: boolean;
    /** If set to *false*, the Menu will be rendered as hidden */
    expanded: boolean;
    /** If set to *true*, the Menu will be rendered as having a bottom border */
    enableBottomSeparator: boolean;
    /** If set to *true*, the Menu *expanded* state change will have *CSS* transitions */
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
