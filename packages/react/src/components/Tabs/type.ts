import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ScalarType } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disabled?: boolean;
    isActive?: boolean;
};

/** 👉 PROPS TYPE */
type TabsEffectivePropsType = Partial<{
    selectedValue: ScalarType;
    value: ScalarType;
    wide: boolean;
    disabled: boolean;

    activeTabIndex: number;
    defaultActiveTabIndex: number;
    onActiveTabIndexChange: (tabIndex: number) => void;

    removePaddingLeft: boolean;
    removePaddingRight: boolean;

    // deprecated
    onSwitch: (tabIndex: number) => void;
    defaultActiveTab: number;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type TabsPropsType = TabsEffectivePropsType;

export type TabsRootPropsType = TabsEffectivePropsType &
    ComponentElementStylePropsType;
