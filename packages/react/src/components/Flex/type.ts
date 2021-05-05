import { HTMLAttributes } from 'react';

import {
    MarginAttributesType,
    PaddingAttributesType,
    SizeAttributesType,
    WidthAttributesType,
} from '../../system';
import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
};

export type DirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';

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

export type AlignContentType =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline';

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

export type FlexEffectivePropsType = Partial<{
    direction: DirectionType;
    justifyContent: JustifyContentType;
    alignContent: AlignContentType;
    alignItems: AlignItemsType;
    flexWrap: WrapType;
    gutterSpacing: number;
}> &
    HTMLAttributes<HTMLElement> &
    SizeAttributesType &
    WidthAttributesType &
    MarginAttributesType;

type FlexItemEffectivePropsType = Partial<{
    flexGrow: number;
    flexShrink: number;
    flexBasis: string;
    order: number;
    alignSelf: AlignSelfType;
}> &
    HTMLAttributes<HTMLElement> &
    PaddingAttributesType;

export type FlexPropsType = FlexEffectivePropsType;

export type FlexRootPropsType = FlexEffectivePropsType &
    ComponentElementStylePropsType;

export type FlexItemPropsType = FlexItemEffectivePropsType;
