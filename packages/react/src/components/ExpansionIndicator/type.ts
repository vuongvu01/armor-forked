import { HTMLAttributes } from 'react';

import { MarginAttributesType, PaddingAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';
import { ComponentBehaviourExpansionType } from '../../system/types/ComponentBehaviourExpansionType';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    disabled?: boolean;
    isExpanded?: boolean;
};

/** 👉 PROPS TYPE */
export type ExpansionIndicatorEffectivePropsType = Partial<{
    expanded: boolean;
    /**
     * @deprecated
     */
    isExpanded: boolean;
    /**
     * Since the separator was removed, this property does nothing, but left for backward compatibility.
     * @deprecated
     */
    displaySeparator: boolean;
    disabled: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    PaddingAttributesType &
    MarginAttributesType;

export type ExpansionIndicatorPropsType = ExpansionIndicatorEffectivePropsType;

export type ExpansionIndicatorRootPropsType = ExpansionIndicatorEffectivePropsType &
    ComponentElementStylePropsType;

export type ExpansionIndicatorContentPropsType = ComponentElementStylePropsType;

export type ExpansionIndicatorIconPropsType = Pick<
    ExpansionIndicatorEffectivePropsType,
    'disabled'
> &
    ComponentBehaviourExpansionType &
    ComponentElementStylePropsType;
