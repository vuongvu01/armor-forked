import React, { HTMLAttributes, MouseEvent } from 'react';

import { MarginAttributesType } from '../../../../../system/attributes';
import { Indexed, ScalarType } from '../../../../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
};
export type OptionObjectType = {
    value: ScalarType;
    label: string;
    onClick?: (event: MouseEvent) => void;
    [key: string]: any;
};

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

type HeaderNavigationMenuContentHeaderEffectivePropsType = Indexed<{}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationMenuContentBodyOptionsPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType;
