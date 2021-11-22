import { HTMLAttributes } from 'react';
import { MarginPropsType, PaddingPropsType } from '@deliveryhero/armor-system';

import { AlignSelfType, FlexEffectivePropsType } from '../Flex/type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

/** 👉 PROPS TYPE */
type StackEffectivePropsType = Partial<{
    reverse: boolean;
}> &
    Pick<
        FlexEffectivePropsType,
        'gutterSpacing' | 'flexWrap' | 'alignItems' | 'justifyContent'
    > &
    HTMLAttributes<HTMLElement> &
    PaddingPropsType &
    MarginPropsType;

type StackItemEffectivePropsType = Partial<{
    flexGrow: number;
    flexShrink: number;
    flexBasis: string;
    order: number;
    /**
     * @armor-docs-expand AlignSelfType
     */
    alignSelf: AlignSelfType;
}> &
    HTMLAttributes<HTMLElement> &
    PaddingPropsType &
    MarginPropsType;

export type StackPropsType = StackEffectivePropsType;

export type StackItemPropsType = StackItemEffectivePropsType;
