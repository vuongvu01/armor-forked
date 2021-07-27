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
    internalValue: DropdownInternalValueType; // todo: decouple this from the Dropdown
    setInternalValue?: (nextValue: DropdownInternalValueType) => void; // todo: decouple this from the Dropdown
    internalOptions: DropdownInternalOptionType; // todo: decouple this from the Dropdown
    dynamicInternalOptions?: DropdownInternalOptionType; // todo: decouple this from the Dropdown
    setInternalOptions?: (nextOptions: DropdownInternalOptionType) => void; // todo: decouple this from the Dropdown
    setSearch?: (searchQuery: string) => void;
    enableAbsolutePositioning?: boolean;
    groups?: OptionListGroupObjectType[];
    isFlat?: boolean;
    blurInput?: () => void;
    onCancelClick?: () => void;
    onConfirmClick?: () => void;
    setIsOptionListShown: (value: boolean) => void;
    onValueUpdate: (
        internalValue: DropdownInternalValueType, // todo: decouple this from the Dropdown
        multiple: boolean | undefined,
        item: OptionObjectType,
        itemValue: ScalarType,
        options?: Array<string | OptionObjectType>,
        isFlat?: boolean,
    ) => void;
    onChange?: (event: DropdownOnChangeEventType) => void; // todo: decouple this from the Dropdown
    enableOptionContentEllipsis?: boolean;
    renderItemAdditionalInfo?: (
        option: string | OptionObjectType,
    ) => ReactChild;
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
    multiple?: boolean;
    renderItemAdditionalInfo?: OptionListPropsType['renderItemAdditionalInfo'];
} & HTMLAttributes<HTMLDivElement>;

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

export type OptionListItemAdditionalInfoPropsType = ComponentElementStylePropsType;
