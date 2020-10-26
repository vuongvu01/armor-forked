import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType } from '../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
    spacing?: number;
};

type GridEffectivePropsType = Indexed<{
    gutterSpacing?: number;
    gutterSpacingVertical?: number;
    gutterSpacingHorizontal?: number;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type GridPropsType = GridEffectivePropsType;

export type GridContextType = Indexed<{
    spacing?: number;
}>;
