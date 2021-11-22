import { HTMLAttributes } from 'react';
import { PaddingPropsType } from '@deliveryhero/armor-system';

import { GridPropsType } from '../type';

export type GridSizeType =
    // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
    // | 'auto'
    // | false
    // | true
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
    gutterSpacing?: number;
    gutterSpacingVertical?: number;
    gutterSpacingHorizontal?: number;
};

/** 👉 PROPS TYPE */
type GridItemEffectivePropsType = Partial<{
    /**
     * @armor-docs-expand GridSizeType
     */
    xs?: GridSizeType;
    /**
     * @armor-docs-expand GridSizeType
     */
    sm?: GridSizeType;
    /**
     * @armor-docs-expand GridSizeType
     */
    md?: GridSizeType;
    /**
     * @armor-docs-expand GridSizeType
     */
    lg?: GridSizeType;
    /**
     * @armor-docs-expand GridSizeType
     */
    xl?: GridSizeType;
}> &
    Pick<
        GridPropsType,
        'gutterSpacing' | 'gutterSpacingVertical' | 'gutterSpacingHorizontal'
    > &
    HTMLAttributes<HTMLElement> &
    PaddingPropsType;

export type GridItemPropsType = GridItemEffectivePropsType;
