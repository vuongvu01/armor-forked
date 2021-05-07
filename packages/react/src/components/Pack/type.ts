import { HTMLAttributes } from 'react';

import { MarginAttributesType, PaddingAttributesType } from '../../system';
import { AlignSelfType, FlexEffectivePropsType } from '../Flex/type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type PackEffectivePropsType = Partial<{
    reverse: boolean;
}> &
    Pick<
        FlexEffectivePropsType,
        'gutterSpacing' | 'flexWrap' | 'alignItems' | 'justifyContent'
    > &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType &
    PaddingAttributesType;

type PackItemEffectivePropsType = Partial<{
    flexGrow: number;
    flexShrink: number;
    flexBasis: string;
    order: number;
    alignSelf: AlignSelfType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType &
    PaddingAttributesType;

export type PackPropsType = PackEffectivePropsType;

export type PackItemPropsType = PackItemEffectivePropsType;
