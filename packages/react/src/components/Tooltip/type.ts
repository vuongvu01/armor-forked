import { HTMLAttributes, ReactElement, ReactNode } from 'react';

import { Indexed, ObjectLiteralType } from '../../type';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { PopperPlacementType } from '../../system/hooks/type';

type TooltipEffectivePropsType = Partial<{
    align: PopperPlacementType;
    error: boolean;
    small: boolean;
    content: ReactNode;
    trigger: ReactElement;
    open: boolean;
    defaultOpen: boolean;
    onToggle: (open: boolean) => void;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    ObjectLiteralType;

/* Tooltip component prop type */
export type TooltipPropsType = TooltipEffectivePropsType &
    ComponentStylePropsType;

/* Tooltip Root node prop type */
export type TooltipRootPropsType = TooltipEffectivePropsType & {} & ComponentElementStylePropsType;

/* Tooltip Arrow node prop type */
export type TooltipArrowPropsType = Partial<{
    error: boolean;
}> &
    ComponentElementStylePropsType;
