import { HTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed, ObjectLiteralType, ScalarType } from '../../type';
import { ComponentElementStylePropsType } from '../type';
import { JustifyContentType } from '../Flex/type';
import {
    DropdownSelectedOptionType,
    DropdownValueType,
    OptionFormatType,
} from '../Dropdown/type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

export type SuggestionObjectType = {
    label: string;
    value: ScalarType;
} & ObjectLiteralType;

export type HeaderNavigationSelectOnSelectType = (
    selectedOption: DropdownSelectedOptionType,
    itemIndex?: number,
) => void;

export type HeaderNavigationSelectOnChangeEventType = {
    target: {
        value?: DropdownValueType;
        name?: string;
    };
};

export type NavigationSelectorParamsType = {
    label?: string;
    isMultiselect?: boolean;
    isExpanded?: boolean;
    disabled?: boolean;
    defaultValue?: number | number[];
    formatOption?: OptionFormatType;
    value?: number | number[];
    options?:
        | string[]
        | { label: string; value: string | number; [key: string]: any }[]; // aka OptionType - defining explicitly to expose into docs
};

type HeaderNavigationEffectivePropsType = Indexed<{
    title?: ReactNode;
    /**
     * @deprecated
     * Use defaultExpanded instead
     */
    isMenuExpanded?: boolean;
    defaultExpanded?: boolean;
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
