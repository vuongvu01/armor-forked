import { HTMLAttributes, MouseEvent, ReactChild } from 'react';
import {
    DictionaryItemIDBased,
    ObjectLiteralType,
    ScalarType,
} from '../../type';
import {
    DropdownEffectivePropsType,
    DropdownInternalOptionType,
    DropdownInternalValueType,
} from '../Dropdown/type';
import { CheckedIconType } from '../Checkbox/type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    disabled?: boolean;
    isActive?: boolean;
};

export type OptionObjectType = {
    label: ReactChild;
    value: ScalarType;
} & ObjectLiteralType;

export type OptionListGroupObjectType = DictionaryItemIDBased &
    ObjectLiteralType;

export type OptionListGroupObjectIndexType = ObjectLiteralType<
    OptionListGroupObjectType
>;

export type OptionListPropsType = {
    onClick?: (event: MouseEvent) => void;
    disabled?: boolean;
    internalValue: DropdownInternalValueType;
    setInternalValue: (nextValue: DropdownInternalValueType) => void;
    internalOptions: DropdownInternalOptionType;
    dynamicInternalOptions: DropdownInternalOptionType;
    setInternalOptions: (nextOptions: DropdownInternalOptionType) => void;
    enableAbsolutePositioning: boolean;
    groups?: OptionListGroupObjectType[];
} & Pick<
    DropdownEffectivePropsType,
    | 'className'
    | 'options'
    | 'isOptionListShown'
    | 'multiple'
    | 'enableSelectAllOption'
    | 'enableSearchOption'
    | 'selectAllLabel'
    | 'searchPlaceholder'
    | 'defaultSearchQuery'
> &
    ObjectLiteralType;

export type OptionListBeforeSectionContainerPropsType = ObjectLiteralType;

export type OptionListItemPropsType = {
    isSelected?: boolean;
    item: OptionObjectType;
    onOptionSelect?: (item: OptionObjectType) => void;
    checkedIcon?: CheckedIconType;
} & Pick<DropdownEffectivePropsType, 'className' | 'multiple'> &
    HTMLAttributes<HTMLElement> &
    ObjectLiteralType;

export type OptionListSearchPropsType = {
    searchPlaceholder?: string;
} & ObjectLiteralType;

export type DropdownOnSearchQueryChangeType = (searchQuery?: string) => void;

export type OptionListItemGroupPropType = {
    enableSeparator: boolean;
};
