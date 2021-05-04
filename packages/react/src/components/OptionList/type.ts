import { HTMLAttributes, ReactChild } from 'react';
import {
    DictionaryItemIDBased,
    ObjectLiteralType,
    ScalarType,
} from '../../type';
import {
    DropdownEffectivePropsType,
    DropdownInternalOptionType,
    DropdownInternalValueType,
    DropdownOnChangeEventType,
} from '../Dropdown/type';
import { CheckedIconType } from '../Checkbox/type';
import { ComponentElementStylePropsType } from '../type';

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

export type OptionListGroupObjectType = DictionaryItemIDBased;

export type OptionListGroupObjectIndexType = ObjectLiteralType<
    OptionListGroupObjectType
>;

export type OptionListPropsType = {
    disabled?: boolean;
    internalValue: DropdownInternalValueType;
    setInternalValue?: (nextValue: DropdownInternalValueType) => void;
    internalOptions: DropdownInternalOptionType;
    dynamicInternalOptions?: DropdownInternalOptionType;
    setInternalOptions?: (nextOptions: DropdownInternalOptionType) => void;
    setSearch?: (searchQuery: string) => void;
    enableAbsolutePositioning?: boolean;
    groups?: OptionListGroupObjectType[];
    isFlat?: boolean;
    blurInput?: () => void;
    setIsOptionListShown: (value: boolean) => void;
    onValueUpdate: (
        internalValue: DropdownInternalValueType,
        multiple: DropdownEffectivePropsType['multiple'],
        item: OptionObjectType,
        itemValue: ScalarType,
        options: DropdownEffectivePropsType['options'],
        isFlat?: boolean,
    ) => void;
    onChange?: (event: DropdownOnChangeEventType) => void;
} & Pick<
    DropdownEffectivePropsType,
    | 'options'
    | 'isOptionListShown'
    | 'multiple'
    | 'enableSelectAllOption'
    | 'enableSearchOption'
    | 'selectAllLabel'
    | 'searchPlaceholder'
    | 'defaultSearchQuery'
> &
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export type OptionListRootPropsType = Pick<
    OptionListPropsType,
    'isOptionListShown' | 'enableAbsolutePositioning'
> &
    ComponentElementStylePropsType;

export type OptionListContainerPropsType = ComponentElementStylePropsType;

export type OptionListBeforeSectionContainerPropsType = {} & ObjectLiteralType;

export type OptionListItemPropsType = {
    isSelected?: boolean;
    item: OptionObjectType;
    onOptionSelect?: (item: OptionObjectType) => void;
    checkedIcon?: CheckedIconType;
} & Pick<DropdownEffectivePropsType, 'className' | 'multiple'> &
    HTMLAttributes<HTMLDivElement>;

export type OptionListSearchPropsType = {
    searchPlaceholder?: string;
};

export type DropdownOnSearchQueryChangeType = (searchQuery?: string) => void;

export type OptionListItemGroupPropType = {
    enableSeparator: boolean;
};
