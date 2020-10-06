import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType } from '../type';
import {
    AlignItemsType,
    AlignSelfType,
    JustifyContentType,
    WrapType,
} from '../Flex/type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};

type PackEffectivePropsType = Indexed<{
    reverse?: boolean;
    justifyContent?: JustifyContentType;
    alignItems?: AlignItemsType;
    flexWrap?: WrapType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

type PackItemEffectivePropsType = Indexed<{
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    order?: number;
    alignSelf?: AlignSelfType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type PackPropsType = PackEffectivePropsType;

export type PackItemPropsType = PackItemEffectivePropsType;
