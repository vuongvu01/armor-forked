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

export type ExpansionIndicatorPropsType = Partial<{
    error: boolean;
    isExpanded: boolean;
    displaySeparator: boolean;
}> &
    Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'value' | 'onChange' | 'defaultValue'
    > &
    MarginAttributesType;

export type ExpansionIndicatorRootPropsType = ExpansionIndicatorPropsType &
    ComponentElementStylePropsType;

export type ExpansionIndicatorContentPropsType = Pick<
    ExpansionIndicatorPropsType,
    'displaySeparator' | 'error'
> &
    ComponentElementStylePropsType;

export type ExpansionIndicatorIconPropsType = Pick<
    ExpansionIndicatorPropsType,
    'disabled' | 'error'
> &
    ComponentBehaviourExpansionType &
    ComponentElementStylePropsType;
