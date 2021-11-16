import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type DividerEffectivePropsType = Partial<{
    horizontal: boolean;
    vertical: boolean;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

export type DividerPropsType = DividerEffectivePropsType &
    ComponentStylePropsType;

export type DividerRootPropsType = DividerEffectivePropsType &
    ComponentElementStylePropsType;
