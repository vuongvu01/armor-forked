import { HTMLAttributes, MouseEvent } from 'react';
import { MarginPropsType, WidthPropsType } from '@deliveryhero/armor-system';

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

/** 👉 PROPS TYPE */
export type AccordionEffectivePropsType = Partial<{
    /** If set to true, the Accordion is rendered as *expanded* by default. This option works only if **expanded** is not defined. */
    defaultExpanded: boolean;
    /** If set to true, the Accordion is rendered as *disabled* and, therefore, non-interactive. */
    disabled: boolean;
    /** If set to true, the Accordion is rendered as *expanded*. If this option is set, the component works in the controlled mode, otherwise - in the uncontrolled. */
    expanded: boolean;
    /** Called when the Accordion gets opened or closed. */
    onToggle: (event: MouseEvent<HTMLDivElement>, expanded: boolean) => void;
}> &
    HTMLAttributes<HTMLElement> &
    MarginPropsType &
    WidthPropsType;

export type AccordionPropsType = AccordionEffectivePropsType;

export type AccordionRootPropsType = {
    isExpanded?: boolean;
} & AccordionEffectivePropsType &
    ComponentElementStylePropsType;
