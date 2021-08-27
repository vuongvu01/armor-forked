import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';
import { ScalarType } from '../../type';

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
    MarginAttributesType;

export type TabViewPropsType = TabViewEffectivePropsType;

export type TabViewRootPropsType = TabViewEffectivePropsType &
    ComponentElementStylePropsType;
