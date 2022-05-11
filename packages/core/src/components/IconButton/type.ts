import { HTMLAttributes } from 'react';
import { ColorPropsType, MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type IconButtonEffectivePropsType = Partial<{
    /** Being set to true, renders the component with a slightly different colors. Only applicable in the default theme */
    light: boolean;
    /** Being set to false, renders the component as invisible */
    visible: boolean;
    /** Being set to true, renders the component as disabled */
    disabled: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLButtonElement> & // includes all HTML Div properties
    MarginPropsType &
    ColorPropsType;

/* IconButton component prop type */
export type IconButtonPropsType = IconButtonEffectivePropsType &
    ComponentStylePropsType;

/* IconButton Root node prop type */
export type IconButtonRootPropsType = IconButtonEffectivePropsType &
    ComponentElementStylePropsType;
