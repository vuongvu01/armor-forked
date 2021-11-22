import React, { HTMLAttributes, ReactChild } from 'react';
import { ScalarType } from '@deliveryhero/armor-system';

import { DictionaryItemIDBasedType, ObjectLiteralType } from '../../type';
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
    groupId?: string;
} & ObjectLiteralType;

export type OptionListGroupObjectType = DictionaryItemIDBasedType;

export type InternalItemGroupObjectTypeInternal = DictionaryItemIDBasedType & {
    totalItemsCount: number;
    selectedItemsCount: number;
    selectedItemIds: ScalarType[];
};

export type InternalItemGroupObjectType = Record<
    string,
    InternalItemGroupObjectTypeInternal
>;

export type OptionListGroupObjectIndexType = ObjectLiteralType<
    OptionListGroupObjectType
>;

/** 👉 PROPS TYPE */
export type OptionListPropsType = {
    disabled?: boolean;
    internalValue: DropdownInternalValueType; // todo: decouple this from the Dropdown_
    setInternalValue?: (nextValue: DropdownInternalValueType) => void; // todo: decouple this from the Dropdown_
    internalOptions: DropdownInternalOptionType; // todo: decouple this from the Dropdown_
    dynamicInternalOptions?: DropdownInternalOptionType; // todo: decouple this from the Dropdown_
    setInternalOptions?: (nextOptions: DropdownInternalOptionType) => void; // todo: decouple this from the Dropdown_
    setSearch?: (searchQuery: string) => void;
    enableAbsolutePositioning?: boolean;
    groups?: OptionListGroupObjectType[];
    internalGroups?: ItemGroupsPropsType;
    setInternalGroups?: (groups: InternalItemGroupObjectType) => void;
    isFlat?: boolean;
    blurInput?: () => void;
    onCancelClick?: () => void;
    onConfirmClick?: () => void;
    setIsOptionListShown: (value: boolean) => void;
    onValueUpdate: (
        internalValue: DropdownInternalValueType, // todo: decouple this from the Dropdown_
        multiple: boolean | undefined,
        item: OptionObjectType,
        itemValue: ScalarType,
        options?: Array<string | OptionObjectType>,
        isFlat?: boolean,
    ) => void;
    onChange?: (event: DropdownOnChangeEventType) => void; // todo: decouple this from the Dropdown_
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
    | 'enableGroupSelection'
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

export type OptionListItemGroupTypographyPropsType = Pick<
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
    onClick?: (
        event: React.MouseEvent<HTMLDivElement>,
        groupId: ScalarType,
    ) => void;
    internalGroup?: InternalItemGroupObjectTypeInternal;
    checked?: boolean;
} & Pick<OptionListItemPropsType, 'enableContentEllipsis'> &
    Pick<DropdownEffectivePropsType, 'multiple' | 'enableGroupSelection'> &
    HTMLAttributes<HTMLDivElement>;

export type ItemGroupsPropsType = InternalItemGroupObjectType | undefined;

export type OptionListVirtualOffsetType = {
    height: number;
} & ComponentElementStylePropsType;

export type OptionListItemAdditionalInfoPropsType = ComponentElementStylePropsType;
