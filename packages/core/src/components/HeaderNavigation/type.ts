import { HTMLAttributes, ReactNode } from 'react';
import { MarginPropsType, ScalarType } from '@deliveryhero/armor-system';

import { ObjectLiteralType } from '../../type';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';
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
    defaultValue?: ScalarType | ReadonlyArray<ScalarType>;
    formatOption?: OptionFormatType;
    value?: ScalarType | ReadonlyArray<ScalarType>;
    options?:
        | string[]
        | { label: string; value: ScalarType; [key: string]: any }[]; // aka OptionType - defining explicitly to expose into docs
};

/** 👉 PROPS TYPE */
type HeaderNavigationEffectivePropsType = Partial<{
    title: ReactNode;
    /**
     * @deprecated
     * Use defaultExpanded instead
     */
    isMenuExpanded: boolean;
    defaultExpanded: boolean;
    navigationMenuTitle: ReactNode;
    navigationMenuContent: ReactNode;
    navigationAction: ReactNode;
    selector: ReactNode;
    /**
     * @armor-docs-expand JustifyContentType
     */
    justifyContent: JustifyContentType;
    links: ReactNode;
    search: ReactNode;
}> &
    Omit<HTMLAttributes<HTMLElement>, 'title'> &
    MarginPropsType;

export type HeaderNavigationPropsType = HeaderNavigationEffectivePropsType &
    ComponentStylePropsType;

export type HeaderNavigationRootPropsType = HeaderNavigationEffectivePropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationTitleRootPropsType =
    HeaderNavigationEffectivePropsType & ComponentElementStylePropsType;

export type HeaderNavigationSelectorRootPropsType =
    HeaderNavigationEffectivePropsType & ComponentElementStylePropsType;

export type NavigationItemPropsType = HeaderNavigationEffectivePropsType &
    ComponentElementStylePropsType;
