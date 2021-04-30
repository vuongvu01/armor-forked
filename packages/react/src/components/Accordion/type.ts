import { HTMLAttributes, MouseEvent } from 'react';

import { MarginAttributesType } from '../../system';
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
    onToggle?: (event: MouseEvent<HTMLDivElement>) => void;
};

export type AccordionEffectivePropsType = Partial<{
    children: any;
    defaultExpanded: boolean;
    disabled: boolean;
    expanded: boolean;
    onToggle: (event: MouseEvent<HTMLDivElement>, expanded: boolean) => void;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type AccordionPropsType = AccordionEffectivePropsType;

export type AccordionRootPropsType = {
    isExpanded?: boolean;
} & AccordionEffectivePropsType &
    ComponentElementStylePropsType;
