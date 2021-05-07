import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    disabled?: boolean;
};

type TabViewEffectivePropsType = Partial<{
    selectedValue: string | number;
    value: string | number;
}> &
    HTMLAttributes<HTMLDivElement> &
    MarginAttributesType;

export type TabViewPropsType = TabViewEffectivePropsType;

export type TabViewRootPropsType = TabViewEffectivePropsType &
    ComponentElementStylePropsType;
