import { HTMLAttributes } from 'react';

import { MarginAttributesType, PaddingAttributesType } from '../../system';
import { AlignSelfType, FlexEffectivePropsType } from '../Flex/type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

/** 👉 PROPS TYPE */
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

/** 👉 PROPS TYPE */
type PackItemEffectivePropsType = Partial<{
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
    MarginAttributesType &
    PaddingAttributesType;

export type PackPropsType = PackEffectivePropsType;

export type PackItemPropsType = PackItemEffectivePropsType;
