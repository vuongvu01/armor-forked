import { HTMLAttributes } from 'react';
import { MarginPropsType, SizePropsType } from '@deliveryhero/armor-system';

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
    SizePropsType &
    MarginPropsType;

export type GridPropsType = GridEffectivePropsType;

export type GridContextType = Pick<
    GridEffectivePropsType,
    'gutterSpacing' | 'gutterSpacingVertical' | 'gutterSpacingHorizontal'
>;
