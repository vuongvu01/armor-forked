import { HTMLAttributes, ReactElement, ReactNode } from 'react';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { ComponentBehaviourOpenStateType } from '../../system/types/ComponentBehaviourOpenStateType';
import { ComponentBehaviourOverlayType } from '../../system/types/ComponentBehaviourOverlayType';
import { ComponentBehaviourPortalType } from '../../system/types/ComponentBehaviourPortalType';
import { PopperPropsType, WidthAttributesType } from '../../system';

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
    WidthAttributesType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

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
