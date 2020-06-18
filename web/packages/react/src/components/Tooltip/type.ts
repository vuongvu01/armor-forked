import { HTMLAttributes, ReactNode } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../type';
import { Indexed } from '../../type';
import {
    MarginAttributesType,
    DisplayAttributesType,
} from '../../system/attributes';

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
    small?: boolean;
    content?: ReactNode;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* Tooltip component prop type */
export type TooltipPropsType = TooltipEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            Arrow?: string;
            // add custom className for other nodes here
        },
        TooltipStylesPropsType
    >;

export type TooltipStylesPropsType = {
    Root?: StylesFunctionOrStubType<TooltipEffectivePropsType>;
    Arrow?: StylesFunctionOrStubType;
    // add style properties for other nodes here
};

/* Tooltip Root node prop type */
export type TooltipRootPropsType = PropsWithNodeStylePropsType<
    TooltipEffectivePropsType
> & {
    hidden: boolean;
};

/* Tooltip Arrow node prop type */
export type TooltipArrowPropsType = PropsWithNodeStylePropsType<
    Pick<TooltipEffectivePropsType, 'dark' | 'hide'>
>;
