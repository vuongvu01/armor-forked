import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};

type DirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type JustifyContentType =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';

export type AlignItemsType =
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end';

export type WrapType = 'nowrap' | 'wrap' | 'wrap-reverse';

export type AlignSelfType =
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';

type FlexEffectivePropsType = Indexed<{
    direction?: DirectionType;
    justifyContent?: JustifyContentType;
    alignItems?: AlignItemsType;
    flexWrap?: WrapType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

type FlexItemEffectivePropsType = Indexed<{
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    order?: number;
    alignSelf?: AlignSelfType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type FlexPropsType = FlexItemEffectivePropsType;

export type FlexRootPropsType = FlexEffectivePropsType &
    NodeStylePropsType<FlexEffectivePropsType>;

export type FlexItemPropsType = FlexEffectivePropsType;
