import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ObjectLiteralType, ScalarType } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disabled?: boolean;
    isActive?: boolean;
};

type TabsEffectivePropsType = Partial<{
    selectedValue: ScalarType;
    value: ScalarType;
    wide: boolean;

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
    MarginAttributesType &
    ObjectLiteralType;

export type TabsPropsType = TabsEffectivePropsType;

export type TabsRootPropsType = TabsEffectivePropsType &
    ComponentElementStylePropsType;
