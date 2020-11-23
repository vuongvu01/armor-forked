import { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disabled?: boolean;
    isActive?: boolean;
};

type TabEffectivePropsType = Indexed<{
    value?: number;
    tabIndex?: number;
}> &
    InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type TabPropsType = TabEffectivePropsType;

export type TabRootPropsType = TabEffectivePropsType &
    ComponentElementStylePropsType;

export type TabLabelPropsType = TabEffectivePropsType &
    ComponentElementStylePropsType;
