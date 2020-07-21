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
    isActive?: boolean;
};

type TabsEffectivePropsType = Indexed<{
    selectedValue?: string | number;
    value?: string | number;
    onSwitch: (tabIndex: number) => void;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type TabsPropsType = TabsEffectivePropsType;

export type TabsRootPropsType = TabsEffectivePropsType &
    NodeStylePropsType<TabsEffectivePropsType>;
