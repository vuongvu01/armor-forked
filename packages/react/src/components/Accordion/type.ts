import React, { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    defaultExpanded?: boolean;
    disabled?: boolean;
    expanded?: boolean;
};

export type AccordionContextType = {
    disabled?: boolean;
    isExpanded?: boolean;
    onToggle?: (
        event?:
            | React.MouseEvent<HTMLInputElement, globalThis.MouseEvent>
            | undefined,
    ) => void;
};

export type AccordionEffectivePropsType = Indexed<{
    children?: any;
    defaultExpanded?: boolean;
    disabled?: boolean;
    expanded?: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type AccordionPropsType = AccordionEffectivePropsType;

export type AccordionRootPropsType = AccordionEffectivePropsType &
    ComponentElementStylePropsType;
