import { HTMLAttributes } from 'react';
import {
    HeightPropsType,
    MarginPropsType,
    PaddingPropsType,
    WidthPropsType,
    ScalarType,
} from '@deliveryhero/armor-system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

type SkeletonEffectivePropsType = Partial<{
    width: ScalarType;
    height: ScalarType;
    rounded: boolean;
    animated: boolean;
    imagePlaceholder: boolean;
}> &
    HTMLAttributes<HTMLDivElement> &
    MarginPropsType &
    PaddingPropsType &
    HeightPropsType &
    WidthPropsType;

export type SkeletonPropsType = SkeletonEffectivePropsType &
    ComponentStylePropsType;

export type SkeletonRootPropsType = SkeletonEffectivePropsType &
    ComponentElementStylePropsType;
