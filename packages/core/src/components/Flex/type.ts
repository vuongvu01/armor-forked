import { HTMLAttributes } from 'react';
import {
    MarginPropsType,
    PaddingPropsType,
    SizePropsType,
    WidthPropsType,
} from '@deliveryhero/armor-system';

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

/** 👉 PROPS TYPE */
export type FlexEffectivePropsType = Partial<{
    /**
     * @armor-docs-expand DirectionType
     */
    direction: DirectionType;
    /**
     * @armor-docs-expand JustifyContentType
     */
    justifyContent: JustifyContentType;
    /**
     * @armor-docs-expand AlignContentType
     */
    alignContent: AlignContentType;
    /**
     * @armor-docs-expand AlignItemsType
     */
    alignItems: AlignItemsType;
    /**
     * @armor-docs-expand WrapType
     */
    flexWrap: WrapType;
    gutterSpacing: number;
}> &
    HTMLAttributes<HTMLElement> &
    SizePropsType &
    MarginPropsType;

type FlexItemEffectivePropsType = Partial<{
    flexGrow: number;
    flexShrink: number;
    flexBasis: string;
    order: number;
    alignSelf: AlignSelfType;
}> &
    HTMLAttributes<HTMLElement> &
    WidthPropsType &
    MarginPropsType &
    PaddingPropsType;

export type FlexPropsType = FlexEffectivePropsType;

export type FlexRootPropsType = FlexEffectivePropsType &
    ComponentElementStylePropsType;

export type FlexItemPropsType = FlexItemEffectivePropsType;
