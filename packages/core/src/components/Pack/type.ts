import { HTMLAttributes } from 'react';
import { MarginPropsType, PaddingPropsType } from '@deliveryhero/armor-system';

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
    MarginPropsType &
    PaddingPropsType;

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
    MarginPropsType &
    PaddingPropsType;

export type PackPropsType = PackEffectivePropsType;

export type PackItemPropsType = PackItemEffectivePropsType;
