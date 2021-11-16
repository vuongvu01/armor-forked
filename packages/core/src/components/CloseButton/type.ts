import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../type';

/** 👉 PROPS TYPE */
export type CloseButtonEffectivePropsType = HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

export type CloseButtonPropsType = CloseButtonEffectivePropsType;

export type CloseButtonRootPropsType = CloseButtonEffectivePropsType &
    ComponentElementStylePropsType;
