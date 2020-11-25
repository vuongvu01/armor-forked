import { HTMLAttributes, ReactNode } from 'react';

import { Indexed } from '../../type';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

// https://popper.js.org/docs/v2/constructors/
export type TooltipAlignmentType =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'; // todo: support all of them

type TooltipEffectivePropsType = Indexed<{
    align?: TooltipAlignmentType;
    dark?: boolean;
    error?: boolean;
    small?: boolean;
    content?: ReactNode;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* Tooltip component prop type */
export type TooltipPropsType = TooltipEffectivePropsType &
    ComponentStylePropsType;

/* Tooltip Root node prop type */
export type TooltipRootPropsType = TooltipEffectivePropsType & {
    hidden: boolean;
} & ComponentElementStylePropsType;

/* Tooltip Arrow node prop type */
export type TooltipArrowPropsType = Pick<
    TooltipEffectivePropsType,
    'dark' | 'hide' | 'error'
> &
    ComponentElementStylePropsType;
