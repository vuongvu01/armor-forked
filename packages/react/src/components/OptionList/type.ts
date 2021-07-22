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
import { TypographyPropsType } from '../Typography/type';

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
    disabled?: boolean;
} & ObjectLiteralType;

export type OptionListGroupObjectType = DictionaryItemIDBased;

export type OptionListGroupObjectIndexType = ObjectLiteralType<
    OptionListGroupObjectType
>;

/** 👉 PROPS TYPE */
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
    onCancelClick?: () => void;
    onConfirmClick?: () => void;
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
    enableOptionContentEllipsis?: boolean;
} & Pick<
    DropdownEffectivePropsType,
    | 'options'
    | 'isOptionListShown'
    | 'multiple'
    | 'enableSelectAllOption'
    | 'enableSearchOption'
    | 'enableFooter'
    | 'footerContent'
    | 'selectAllLabel'
    | 'searchPlaceholder'
    | 'enableVirtualization'
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

/** 👉 PROPS TYPE */
export type OptionListItemPropsType = {
    isSelected?: boolean;
    item: OptionObjectType;
    onOptionSelect?: (item: OptionObjectType) => void;
    checkedIcon?: CheckedIconType;
    enableContentEllipsis?: boolean;
} & Pick<DropdownEffectivePropsType, 'className' | 'multiple'> &
    HTMLAttributes<HTMLDivElement>;

export type OptionListFooterPropsType = {
    onCancelClick?: () => void;
    onConfirmClick?: () => void;
} & Pick<DropdownEffectivePropsType, 'footerContent'> &
    HTMLAttributes<HTMLDivElement>;

export type OptionListItemTypographyPropsType = Pick<
    OptionListItemPropsType,
    'enableContentEllipsis'
> &
    TypographyPropsType;

export type OptionListSearchPropsType = {
    searchPlaceholder?: string;
};

export type DropdownOnSearchQueryChangeType = (searchQuery?: string) => void;

export type OptionListItemGroupPropType = {
    enableSeparator: boolean;
};

export type OptionListVirtualOffsetType = {
    height: number;
} & ComponentElementStylePropsType;
