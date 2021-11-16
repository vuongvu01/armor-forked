import { HTMLAttributes } from 'react';
import { MarginPropsType, ScalarType } from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    disabled?: boolean;
};

/** 👉 PROPS TYPE */
type TabViewEffectivePropsType = Partial<{
    selectedValue: ScalarType;
    value: ScalarType;
}> &
    HTMLAttributes<HTMLDivElement> &
    MarginPropsType;

export type TabViewPropsType = TabViewEffectivePropsType;

export type TabViewRootPropsType = TabViewEffectivePropsType &
    ComponentElementStylePropsType;
