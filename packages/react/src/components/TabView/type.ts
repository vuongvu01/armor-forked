import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    classNames?: ClassNamesType;
    disabled?: boolean;
};

type TabViewEffectivePropsType = Indexed<{
    selectedValue?: string | number;
    value?: string | number;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type TabViewPropsType = TabViewEffectivePropsType;

export type TabViewRootPropsType = TabViewEffectivePropsType &
    NodeStylePropsType<TabViewEffectivePropsType>;
