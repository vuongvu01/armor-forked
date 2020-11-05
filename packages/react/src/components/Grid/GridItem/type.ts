import { HTMLAttributes } from 'react';

import { PaddingAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';
import { ClassNamesType } from '../../type';

export type GridSizeType =
    // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
    // | 'auto'
    // | false
    // | true
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
    gutterSpacing?: number;
    gutterSpacingVertical?: number;
    gutterSpacingHorizontal?: number;
};

type GridItemEffectivePropsType = Indexed<{
    xs?: GridSizeType;
    sm?: GridSizeType;
    md?: GridSizeType;
    lg?: GridSizeType;
    xl?: GridSizeType;
}> &
    HTMLAttributes<HTMLElement> &
    PaddingAttributesType;

export type GridItemPropsType = GridItemEffectivePropsType;
