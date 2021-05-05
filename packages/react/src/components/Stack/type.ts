import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
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
    MarginAttributesType;

type StackItemEffectivePropsType = Partial<{
    flexGrow: number;
    flexShrink: number;
    flexBasis: string;
    order: number;
    alignSelf: AlignSelfType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type StackPropsType = StackEffectivePropsType;

export type StackItemPropsType = StackItemEffectivePropsType;
