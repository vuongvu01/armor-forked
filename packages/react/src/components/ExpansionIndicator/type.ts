import { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
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
    error: boolean;
    isExpanded: boolean;
    displaySeparator: boolean;
}> &
    Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'value' | 'onChange' | 'defaultValue'
    > &
    MarginAttributesType;

export type ExpansionIndicatorRootPropsType = ExpansionIndicatorEffectivePropsType &
    ComponentElementStylePropsType;

export type ExpansionIndicatorContentPropsType = Pick<
    ExpansionIndicatorEffectivePropsType,
    'displaySeparator' | 'error'
> &
    ComponentElementStylePropsType;

export type ExpansionIndicatorIconPropsType = Pick<
    ExpansionIndicatorEffectivePropsType,
    'disabled' | 'error'
> &
    ComponentBehaviourExpansionType &
    ComponentElementStylePropsType;
