import { HTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed, ScalarType } from '../../type';
import { ComponentElementStylePropsType } from '../type';
import { JustifyContentType } from '../Flex/type';

export type ClassBasedOnComponentType = {
    className?: string;

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
    value?: number | number[];
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
    ComponentElementStylePropsType;

export type HeaderNavigationTitleRootPropsType = HeaderNavigationEffectivePropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationSelectorRootPropsType = HeaderNavigationEffectivePropsType &
    ComponentElementStylePropsType;

export type NavigationItemPropsType = HeaderNavigationEffectivePropsType &
    ComponentElementStylePropsType;
