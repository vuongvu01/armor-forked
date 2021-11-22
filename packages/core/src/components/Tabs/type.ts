import { HTMLAttributes } from 'react';
import { MarginPropsType, ScalarType } from '@deliveryhero/armor-system';

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
    defaultActiveTab: number;
    /**
     * This property no longer has any effect, it stays to prevent TS crashes in legacy code.
     *
     * @deprecated
     */
    removePaddingLeft: boolean;
    /**
     * This property no longer has any effect, it stays to prevent TS crashes in legacy code.
     *
     * @deprecated
     */
    removePaddingRight: boolean;
    /**
     * @deprecated
     */
    onSwitch: (tabIndex: number) => void;
}> &
    HTMLAttributes<HTMLElement> &
    MarginPropsType;

export type TabsPropsType = TabsEffectivePropsType;

export type TabsRootPropsType = TabsEffectivePropsType &
    ComponentElementStylePropsType;
