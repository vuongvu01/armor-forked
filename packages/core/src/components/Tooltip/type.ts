import { HTMLAttributes, ReactElement, ReactNode } from 'react';
import {
    PopperPropsType,
    WidthPropsType,
    ComponentBehaviourOpenStateType,
    ComponentBehaviourOverlayType,
    ComponentBehaviourPortalType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type TooltipEffectivePropsType = Partial<{
    error: boolean;
    small: boolean;
    content: ReactNode;
    /** Accepts an element as a trigger for the context menu. The element will be cloned and rendered in-place */
    trigger: ReactElement;

    /**
     * Gets called when the open/close state is changed
     * @deprecated
     * */
    onToggle: (open: boolean) => void;

    // add other custom properties here
}> &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    PopperPropsType &
    WidthPropsType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div properties

/* Tooltip component prop type */
export type TooltipPropsType = TooltipEffectivePropsType &
    ComponentStylePropsType;

/* Tooltip Root node prop type */
export type TooltipRootPropsType = TooltipEffectivePropsType &
    ComponentElementStylePropsType;

/* Tooltip Arrow node prop type */
export type TooltipArrowPropsType = Partial<{
    error: boolean;
}> &
    ComponentElementStylePropsType;
