import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import { ComponentStylePropsType } from '../../type';

/** 👉 PROPS TYPE */
type PrimaryIconWrapperEffectivePropsType = Partial<{
    disabled: boolean;
    primaryIconBackgroundColor: string;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

export type PrimaryIconWrapperPropsType = PrimaryIconWrapperEffectivePropsType &
    ComponentStylePropsType;
