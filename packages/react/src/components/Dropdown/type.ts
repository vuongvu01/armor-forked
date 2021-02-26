import { InputHTMLAttributes } from 'react';

import { MarginAttributesType, WidthAttributesType } from '../../system';
import { Indexed, ScalarType } from '../../type';
import { ComponentElementStylePropsType } from '../type';
import { OptionObjectType } from '../OptionList/type';
import { ComponentBehaviourOpenStateType } from '../../system/types/ComponentBehaviourOpenStateType';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    disabled?: boolean;
    isActive?: boolean;
};

export type OptionItemType = string | OptionObjectType;
export type OptionType = OptionItemType[];

export type DropdownValueType =
    | string
    | ReadonlyArray<number | string>
    | number;

export type DropdownInternalValueType = ReadonlyArray<number | string>;

export type DropdownInternalOptionType = OptionObjectType[];

export type DropdownSelectedOptionType = string | OptionItemType;

export type DropDownOnSelectType = (
    selectedOption: DropdownSelectedOptionType,
    itemIndex?: number,
) => void;

export type DropdownOnValueUpdateType = (
    value: DropdownInternalValueType,
    multiple: boolean | undefined,
    selectedOption: OptionObjectType,
    itemIndex?: ScalarType,
    options?: OptionType,
    isFlat?: boolean,
) => void;

export type DropdownOnToggleAllType = (selectAll?: boolean) => void;
export type DropdownOnRemoveMultipleType = (
    tagValuesToRemove: DropdownInternalValueType,
) => void;

export type DropdownOnChangeEventType = {
    target: {
        value?: DropdownValueType;
        name?: string;
    };
};

export type DropdownOnChangeType = (event: DropdownOnChangeEventType) => void;
export type OptionFormatType = (option: OptionItemType) => string;

export type DropdownOnRenderSelectedValueType = (
    value: DropdownInternalValueType,
    options: DropdownInternalOptionType,
) => string;

export type DropdownBeforeSectionPropsType = Indexed<{
    internalValue: DropdownInternalValueType;
    internalOptions: DropdownInternalOptionType;
    setInternalValue: (nextValue: DropdownInternalValueType) => void;
    isFlat: boolean;
}> &
    Pick<
        DropdownEffectivePropsType,
        | 'onRenderSelectedValue'
        | 'disabled'
        | 'multiple'
        | 'onChange'
        | 'options'
        | 'onSelect'
        | 'tagLabelMaxLength'
        | 'openTagsCount'
        | 'renderAggregatedTagsLabel'
        | 'singleLine'
    >;

export type DropdownTagsSectionPropsType = Indexed<{}>;

export type DropdownTagsPropsType = Indexed<{
    tagsToDisplay: DropdownInternalOptionType;
    propsFn: (option: OptionObjectType) => object;
}>;

export type DropdownEffectivePropsType = Indexed<{
    error?: boolean;
    /**
     * @deprecated
     * inline by default
     */
    inline?: boolean;
    displaySeparator?: boolean;
    isListExpanded?: boolean;
    isSelected?: boolean;
    enableSelectAllOption?: boolean;
    selectAllLabel?: string;
    searchPlaceholder?: string;
    defaultSearchQuery?: string;
    enableSearchOption?: boolean;
    singleLine?: boolean;
    tagLabelMaxLength?: number;
    openTagsCount?: number;
    item?: string | OptionItemType;
    itemIndex?: number;
    onOptionSelect?: (itemIndex: number) => void;
    onSelect?: DropDownOnSelectType;
    selectedValue?: string | number;
    isActionSeparatorDisplayed?: boolean;
    label?: string;
    options?: string[] | OptionItemType[];
    multiple?: boolean;
    value?: string | ReadonlyArray<string> | ReadonlyArray<number> | number; // aka DropdownValueType - defining explicitly to expose into docs
    defaultValue?:
        | string
        | ReadonlyArray<string>
        | ReadonlyArray<number>
        | number; // aka OptionType - defining explicitly to expose into docs
    onChange?: (event: DropdownOnChangeEventType) => void;
    onRenderSelectedValue?: (
        value: DropdownInternalValueType,
        options: DropdownInternalOptionType,
    ) => string;
    formatOption?: OptionFormatType;
    renderAggregatedTagsLabel?: (aggregatedTagsCount: number) => string;
}> &
    ComponentBehaviourOpenStateType &
    Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'value' | 'onChange' | 'defaultValue' | 'onSelect'
    > &
    MarginAttributesType &
    WidthAttributesType;

export type DropdownPropsType = DropdownEffectivePropsType;

export type ExpansionIndicatorContainerPropsType = Indexed<{}>;

export type DropdownRootPropsType = DropdownEffectivePropsType &
    ComponentElementStylePropsType;
