import { HTMLAttributes, MouseEvent } from 'react';

import { MarginAttributesType } from '../../../system';
import {
    HeaderNavigationSelectOnChangeEventType,
    HeaderNavigationSelectOnSelectType,
    NavigationSelectorParamsType,
} from '../type';
import { ComponentElementStylePropsType } from '../../type';
import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
} from '../../Dropdown/type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type HeaderNavigationSelectorEffectivePropsType = {
    navigationSelectorParams: NavigationSelectorParamsType;
    onOptionSelect?: HeaderNavigationSelectOnSelectType;
    onChange?: (event: HeaderNavigationSelectOnChangeEventType) => void;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onRenderSelectedValue?: (
        value: DropdownInternalValueType,
        options: DropdownInternalOptionType,
    ) => string;
    separator?: boolean;
    enableSelectAllOption?: boolean;
    enableSearchOption?: boolean;
    enablePortal?: boolean;
    zIndex?: number;
} & HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationSelectorPropsType = HeaderNavigationSelectorEffectivePropsType;

export type HeaderNavigationSelectorRootPropsType = {
    isOptionListShown?: boolean;
    separator?: boolean;
    zIndex?: number;
} & ComponentElementStylePropsType;
