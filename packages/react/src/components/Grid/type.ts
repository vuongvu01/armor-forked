import { HTMLAttributes } from 'react';

import { MarginAttributesType, SizeAttributesType } from '../../system';

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
    spacing?: number;
};

/** 👉 PROPS TYPE */
type GridEffectivePropsType = Partial<{
    gutterSpacing: number;
    gutterSpacingVertical: number;
    gutterSpacingHorizontal: number;
}> &
    HTMLAttributes<HTMLElement> &
    SizeAttributesType &
    MarginAttributesType;

export type GridPropsType = GridEffectivePropsType;

export type GridContextType = Pick<
    GridEffectivePropsType,
    'gutterSpacing' | 'gutterSpacingVertical' | 'gutterSpacingHorizontal'
>;
