import { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    classNames?: ClassNamesType;
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

export type TabContainerPropsType = TabEffectivePropsType &
    NodeStylePropsType<TabEffectivePropsType>;

export type TabLabelPropsType = TabEffectivePropsType &
    NodeStylePropsType<TabEffectivePropsType>;
