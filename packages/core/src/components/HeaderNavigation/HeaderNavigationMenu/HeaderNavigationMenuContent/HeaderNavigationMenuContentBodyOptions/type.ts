import React, { HTMLAttributes, MouseEvent } from 'react';
import { MarginPropsType, ScalarType } from '@deliveryhero/armor-system';

import { ObjectLiteralType } from '../../../../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
};
export type OptionObjectType = {
    value: ScalarType;
    label: string;
    onClick?: (event: MouseEvent) => void;
} & ObjectLiteralType;

export type OptionCategoryObjectType = {
    category: string;
    value: ScalarType;
    label: string;
    options?: OptionObjectType[];
};

export type OptionType = OptionObjectType | OptionCategoryObjectType;
export type OptionArrayType = OptionObjectType[] | OptionCategoryObjectType[];

export type HandleOptionItemClickParamsType = {
    event: React.MouseEvent<HTMLInputElement>;
    selectedOption: OptionType;
};

type HeaderNavigationMenuContentHeaderEffectivePropsType = {
    options: OptionArrayType;
    selectedValue?: ScalarType;
    onOptionSelect?: (selectedItem: OptionType) => void;
} & HTMLAttributes<HTMLElement> &
    MarginPropsType;

export type HeaderNavigationMenuContentBodyOptionsPropsType =
    HeaderNavigationMenuContentHeaderEffectivePropsType;
