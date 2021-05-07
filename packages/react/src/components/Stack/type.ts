import { HTMLAttributes } from 'react';

import { MarginAttributesType, PaddingAttributesType } from '../../system';
import { AlignSelfType, FlexEffectivePropsType } from '../Flex/type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type StackEffectivePropsType = Partial<{
    reverse: boolean;
}> &
    Pick<
        FlexEffectivePropsType,
        'gutterSpacing' | 'flexWrap' | 'alignItems' | 'justifyContent'
    > &
    HTMLAttributes<HTMLElement> &
    PaddingAttributesType &
    MarginAttributesType;

type StackItemEffectivePropsType = Partial<{
    flexGrow: number;
    flexShrink: number;
    flexBasis: string;
    order: number;
    alignSelf: AlignSelfType;
}> &
    HTMLAttributes<HTMLElement> &
    PaddingAttributesType &
    MarginAttributesType;

export type StackPropsType = StackEffectivePropsType;

export type StackItemPropsType = StackItemEffectivePropsType;
