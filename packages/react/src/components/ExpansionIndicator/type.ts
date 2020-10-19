import { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType, StylesFunctionOrStubType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    classNames?: ClassNamesType;
    disabled?: boolean;
    isExpanded?: boolean;
};

export type ExpansionIndicatorPropsType = Indexed<{
    error?: boolean;
    isExpanded?: boolean;
    displaySeparator?: boolean;
}> &
    Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'value' | 'onChange' | 'defaultValue'
    > &
    MarginAttributesType;
