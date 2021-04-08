import { HTMLAttributes, ReactElement, ReactNode } from 'react';

import { ObjectLiteralType } from '../../type';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { ComponentBehaviourOpenStateType } from '../../system/types/ComponentBehaviourOpenStateType';
import { ComponentBehaviourOverlayType } from '../../system/types/ComponentBehaviourOverlayType';
import { ComponentBehaviourPortalType } from '../../system/types/ComponentBehaviourPortalType';
import { PopperPropsType } from '../../system/hooks/usePopper';
import { WidthAttributesType } from '../../system';

type TooltipEffectivePropsType = Partial<{
    error: boolean;
    small: boolean;
    content: ReactNode;
    trigger: ReactElement;

    /** @deprecated */
    onToggle: (open: boolean) => void;

    // add other custom properties here
}> &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    PopperPropsType &
    WidthAttributesType &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    ObjectLiteralType;

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
