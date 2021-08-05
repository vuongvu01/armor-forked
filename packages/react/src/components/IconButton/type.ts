import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system';

/** 👉 PROPS TYPE */
type IconButtonEffectivePropsType = Partial<{
    light: boolean;
    visible: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLButtonElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* IconButton component prop type */
export type IconButtonPropsType = IconButtonEffectivePropsType &
    ComponentStylePropsType;

/* IconButton Root node prop type */
export type IconButtonRootPropsType = IconButtonEffectivePropsType &
    ComponentElementStylePropsType;
