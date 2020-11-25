import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import {
    AlignItemsType,
    AlignSelfType,
    JustifyContentType,
    WrapType,
} from '../Flex/type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type StackEffectivePropsType = Indexed<{
    reverse?: boolean;
    justifyContent?: JustifyContentType;
    alignItems?: AlignItemsType;
    flexWrap?: WrapType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

type StackItemEffectivePropsType = Indexed<{
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    order?: number;
    alignSelf?: AlignSelfType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type StackPropsType = StackEffectivePropsType;

export type StackItemPropsType = StackItemEffectivePropsType;
