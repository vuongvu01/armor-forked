import { HTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed, ScalarType } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';
import { JustifyContentType } from '../Flex/type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};

export type SuggestionObjectType = {
    label: string;
    value: ScalarType;
    [key: string]: any;
};

export type NavigationSelectorParamsType = {
    label?: string;
    isMultiselect?: boolean;
    isExpanded?: boolean;
    defaultValue?: number | number[];
    options?:
        | string[]
        | { label: string; value: string | number; [key: string]: any }[]; // aka OptionType - defining explicitly to expose into docs
};

type HeaderNavigationEffectivePropsType = Indexed<{
    title?: ReactNode;
    isMenuExpanded?: boolean;
    navigationMenuTitle?: ReactNode;
    navigationMenuContent?: ReactNode;
    navigationAction?: ReactNode;
    selector?: ReactNode;
    justifyContent?: JustifyContentType;
    links?: ReactNode;
    search?: ReactNode;
}> &
    Omit<HTMLAttributes<HTMLElement>, 'title'> &
    MarginAttributesType;

export type HeaderNavigationPropsType = HeaderNavigationEffectivePropsType;

export type HeaderNavigationRootPropsType = HeaderNavigationEffectivePropsType &
    NodeStylePropsType<HeaderNavigationEffectivePropsType>;

export type HeaderNavigationTitleRootPropsType = HeaderNavigationEffectivePropsType &
    NodeStylePropsType<HeaderNavigationEffectivePropsType>;

export type HeaderNavigationSelectorRootPropsType = HeaderNavigationEffectivePropsType &
    NodeStylePropsType<HeaderNavigationEffectivePropsType>;

export type NavigationPackItemPropsType = HeaderNavigationEffectivePropsType &
    NodeStylePropsType<HeaderNavigationEffectivePropsType>;