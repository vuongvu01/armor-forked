import {
    HTMLAttributes,
    MouseEvent,
    ReactChild,
    ReactElement,
    ReactText,
} from 'react';
import { Indexed, ObjectLiteralType, ScalarType } from '../../type';
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

export type OptionListPropsType = Indexed<{
    onClick?: (event: MouseEvent) => void;
    disabled?: boolean;
    internalValue: DropdownInternalValueType;
    setInternalValue: (nextValue: DropdownInternalValueType) => void;
    internalOptions: DropdownInternalOptionType;
    dynamicInternalOptions: DropdownInternalOptionType;
    setInternalOptions: (nextOptions: DropdownInternalOptionType) => void;
}> &
    Pick<
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
    >;

export type OptionListBeforeSectionContainerPropsType = Indexed<{}>;

export type OptionListItemPropsType = Indexed<{
    isSelected?: boolean;
    item: OptionObjectType;
    onOptionSelect?: (item: OptionObjectType) => void;
    checkedIcon?: CheckedIconType;
}> &
    Pick<DropdownEffectivePropsType, 'className' | 'multiple'> &
    HTMLAttributes<HTMLElement>;

export type OptionListSearchPropsType = Indexed<{
    searchPlaceholder?: string;
}>;

export type DropdownOnSearchQueryChangeType = (searchQuery?: string) => void;
