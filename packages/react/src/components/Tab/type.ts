import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';
import { ComponentBehaviourCustomTagType } from '../../system/types/ComponentBehaviourCustomTagType';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disabled?: boolean;
    isActive?: boolean;
};

/** 👉 PROPS TYPE */
type TabEffectivePropsType = Partial<{
    value: number;
    tabIndex: number;
    to: string;
    label: string;
    disabled: boolean;
    wide: boolean;
}> &
    HTMLAttributes<HTMLDivElement> &
    Partial<Pick<HTMLAnchorElement, 'href' | 'target' | 'rel'>> &
    ComponentBehaviourCustomTagType &
    MarginAttributesType;

export type TabPropsType = TabEffectivePropsType;

export type TabRootPropsType = TabEffectivePropsType & {
    isActive: boolean;
} & ComponentElementStylePropsType;

export type TabTagPropsType = Pick<TabEffectivePropsType, 'disabled'> &
    ComponentElementStylePropsType;

export type TabLabelPropsType = {
    isActive: boolean;
    wide?: boolean;
} & Pick<TabEffectivePropsType, 'disabled'> &
    ComponentElementStylePropsType;
