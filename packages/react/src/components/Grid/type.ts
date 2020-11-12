import { HTMLAttributes } from 'react';

import {
    MarginAttributesType,
    SizeAttributesType,
} from '../../system/attributes';
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
    SizeAttributesType &
    MarginAttributesType;

export type GridPropsType = GridEffectivePropsType;

export type GridContextType = Indexed<{
    spacing?: number;
}>;
